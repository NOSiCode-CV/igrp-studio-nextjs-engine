param(
  [string]$Branch,
  [string]$Base,
  [string]$ConfigPath = "tools/audit-config.json",
  [string]$OutputDir,
  [switch]$NoTests,
  [switch]$NoArtifactScan,
  [switch]$FullTests
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Get-Text([string]$Path) {
  if (-not (Test-Path -LiteralPath $Path)) {
    return $null
  }

  return [System.IO.File]::ReadAllText((Resolve-Path -LiteralPath $Path))
}

function Write-Text([string]$Path, [string]$Content) {
  $directory = Split-Path -Parent $Path
  if ($directory -and -not (Test-Path -LiteralPath $directory)) {
    New-Item -ItemType Directory -Path $directory -Force | Out-Null
  }

  [System.IO.File]::WriteAllText($Path, $Content)
}

function Sanitize-Name([string]$Value) {
  return ($Value -replace '[\\/:*?"<>|]', '-')
}

function Matches-Glob([string]$Value, [string]$Glob) {
  if (-not $Glob) {
    return $false
  }

  return $Value -like $Glob
}

function Get-BranchBase($Config, [string]$BranchName, [string]$Fallback) {
  if ($Fallback) {
    return $Fallback
  }

  $selected = $null
  foreach ($rule in $Config.base_branch_rules) {
    if (Matches-Glob $BranchName $rule.branch_glob) {
      if (-not $selected -or [int]$rule.priority -gt [int]$selected.priority) {
        $selected = $rule
      }
    }
  }

  if ($selected) {
    return $selected.base_branch
  }

  return $Config.defaults.base_branch
}

function Invoke-Git([string[]]$Arguments) {
  $previousAction = $ErrorActionPreference
  $ErrorActionPreference = "Continue"
  try {
    $output = & git @Arguments 2>$null
    $exitCode = $LASTEXITCODE

    return [pscustomobject]@{
      Output = (@($output) -join [Environment]::NewLine)
      ExitCode = $exitCode
    }
  } finally {
    $ErrorActionPreference = $previousAction
  }
}

function Get-WorkingTreeFiles() {
  $staged = Invoke-Git @("diff", "--cached", "--name-only")
  $unstaged = Invoke-Git @("diff", "--name-only")
  $untracked = Invoke-Git @("ls-files", "--others", "--exclude-standard")

  $files = @()
  foreach ($result in @($staged, $unstaged, $untracked)) {
    $files += @($result.Output -split "`r?`n" | Where-Object { $_ -and $_.Trim() -ne "" })
  }

  return @($files | Sort-Object -Unique)
}

function Filter-ExcludedPaths($Config, [string[]]$Paths) {
  $filtered = @()
  foreach ($path in $Paths) {
    $excluded = $false
    foreach ($glob in $Config.defaults.exclude_path_globs) {
      if (Matches-Glob $path $glob) {
        $excluded = $true
        break
      }
    }

    if (-not $excluded) {
      $filtered += $path
    }
  }

  return @($filtered | Sort-Object -Unique)
}

function Invoke-CommandCapture([string]$FilePath, [string[]]$Arguments, [string]$WorkingDirectory) {
  $stdoutPath = [System.IO.Path]::GetTempFileName()
  $stderrPath = [System.IO.Path]::GetTempFileName()

  try {
    $quotedParts = @('"' + $FilePath.Replace('"', '""') + '"')
    foreach ($argument in $Arguments) {
      $quotedParts += '"' + $argument.Replace('"', '""') + '"'
    }

    $commandLine = ($quotedParts -join " ") + " 1> `"$stdoutPath`" 2> `"$stderrPath`""
    Push-Location $WorkingDirectory
    try {
      & cmd /d /c $commandLine | Out-Null
      $exitCode = $LASTEXITCODE
    } finally {
      Pop-Location
    }

    $stdout = if (Test-Path -LiteralPath $stdoutPath) { Get-Content -LiteralPath $stdoutPath -Raw } else { "" }
    $stderr = if (Test-Path -LiteralPath $stderrPath) { Get-Content -LiteralPath $stderrPath -Raw } else { "" }
    $joinedOutput = @($stdout, $stderr) -join [Environment]::NewLine

    return [pscustomobject]@{
      Output = $joinedOutput.Trim()
      ExitCode = $exitCode
    }
  } finally {
    Remove-Item -LiteralPath $stdoutPath, $stderrPath -Force -ErrorAction SilentlyContinue
  }
}

function Classify-ChangedFiles($Config, [string[]]$ChangedFiles) {
  $matches = @()

  foreach ($rule in $Config.classification_rules) {
    $matchedFiles = @($ChangedFiles | Where-Object { Matches-Glob $_ $rule.path_glob })
    if (@($matchedFiles).Count -eq 0) {
      continue
    }

    $matches += [pscustomobject]@{
      Name = $rule.name
      Category = $rule.category
      RiskHint = $rule.risk_hint
      Reason = $rule.reason
      Files = $matchedFiles
    }
  }

  return $matches
}

function Select-Tests($Config, [string[]]$ChangedFiles) {
  $selected = @{}

  foreach ($rule in $Config.test_mapping_rules | Sort-Object priority) {
    $matched = $false
    foreach ($pattern in $rule.match_any_paths) {
      if (@($ChangedFiles | Where-Object { Matches-Glob $_ $pattern }).Count -gt 0) {
        $matched = $true
        break
      }
    }

    if (-not $matched) {
      continue
    }

    foreach ($test in $rule.tests) {
      if (-not $selected.ContainsKey($test)) {
        $commandValue = $null
        if ($rule.PSObject.Properties.Name -contains "command") {
          $commandValue = $rule.command
        }

        $selected[$test] = [pscustomobject]@{
          Test = $test
          Reason = $rule.reason
          Priority = $rule.priority
          RunMode = $rule.run_mode
          Command = $commandValue
        }
      }
    }
  }

  return @($selected.Values | Sort-Object Priority, Test)
}

function Resolve-ArtifactPaths([string]$RepoRoot, [string]$PathGlob, $FileGlobs) {
  $files = @()
  if (-not $PathGlob) {
    return $files
  }

  $baseGlob = $PathGlob -replace '[/\\]\*\*.*$', ''
  if (-not $baseGlob) {
    return $files
  }

  $fullBase = Join-Path $RepoRoot $baseGlob
  $baseDirs = @()
  try {
    $baseDirs = @(Get-Item -Path $fullBase -ErrorAction SilentlyContinue | Where-Object { $_.PSIsContainer })
  } catch {
    $baseDirs = @()
  }

  foreach ($dir in $baseDirs) {
    if (-not $FileGlobs -or @($FileGlobs).Count -eq 0) {
      $files += @(Get-ChildItem -Path $dir.FullName -Recurse -File -ErrorAction SilentlyContinue)
    } else {
      foreach ($glob in $FileGlobs) {
        $leaf = $glob -replace '^\*\*[/\\]', ''
        $files += @(Get-ChildItem -Path $dir.FullName -Recurse -File -Filter $leaf -ErrorAction SilentlyContinue)
      }
    }
  }

  return @($files | Sort-Object -Property FullName -Unique)
}

function Scan-Artifacts($Config, [string]$RepoRoot) {
  $artifacts = @()
  $seen = @{}

  foreach ($rule in $Config.artifact_rules) {
    $fileGlobs = $null
    if ($rule.PSObject.Properties.Name -contains "file_globs") {
      $fileGlobs = $rule.file_globs
    }

    $files = Resolve-ArtifactPaths -RepoRoot $RepoRoot -PathGlob $rule.path_glob -FileGlobs $fileGlobs
    foreach ($file in $files) {
      if ($seen.ContainsKey($file.FullName)) {
        continue
      }
      $seen[$file.FullName] = $true

      $artifacts += [pscustomobject]@{
        Rule = $rule.name
        Category = $rule.category
        Path = $file.FullName
      }
    }
  }

  return $artifacts
}

function Get-RedFlags($Config, $Artifacts, $TestRuns) {
  $findings = @()
  if (-not $Artifacts) {
    $Artifacts = @()
  }
  if (-not $TestRuns) {
    $TestRuns = @()
  }

  $appliesToExtensions = @{
    "generated_tsx" = @(".tsx")
    "generated_ts" = @(".ts")
    "liquid_output" = @(".liquid")
    "json_output" = @(".json")
  }

  foreach ($rule in $Config.red_flag_rules) {
    $extensions = @()
    foreach ($key in $rule.applies_to) {
      if ($appliesToExtensions.ContainsKey($key)) {
        $extensions += $appliesToExtensions[$key]
      }
    }

    if (@($extensions).Count -gt 0) {
      $artifactTargets = @($Artifacts | Where-Object {
        $ext = [System.IO.Path]::GetExtension($_.Path).ToLowerInvariant()
        $extensions -contains $ext
      })

      foreach ($artifact in $artifactTargets) {
        $content = Get-Text $artifact.Path
        if (-not $content) {
          continue
        }

        $matched = $false
        if ($rule.pattern_type -eq "literal") {
          $matched = $content.Contains($rule.pattern)
        } else {
          $matched = [regex]::IsMatch($content, $rule.pattern)
        }

        if ($matched) {
          $findings += [pscustomobject]@{
            Source = $artifact.Path
            RuleId = $rule.id
            Severity = $rule.severity
            Description = $rule.description
          }
        }
      }
    }

    if ($rule.applies_to -contains "test_log" -or $rule.applies_to -contains "summary_log") {
      foreach ($testRun in $TestRuns) {
        $matched = $false
        if ($rule.pattern_type -eq "literal") {
          $matched = $testRun.Output.Contains($rule.pattern)
        } else {
          $matched = [regex]::IsMatch($testRun.Output, $rule.pattern)
        }

        if ($matched) {
          $findings += [pscustomobject]@{
            Source = $testRun.Label
            RuleId = $rule.id
            Severity = $rule.severity
            Description = $rule.description
          }
        }
      }
    }
  }

  return $findings
}

function Get-StaleKnownIssueRules($Config) {
  $stale = @()

  $threshold = 90
  if ($Config.defaults.PSObject.Properties.Name -contains "stale_rule_days") {
    $threshold = [int]$Config.defaults.stale_rule_days
  }

  $cutoff = (Get-Date).AddDays(-$threshold)

  foreach ($rule in $Config.known_issue_rules) {
    if (-not ($rule.PSObject.Properties.Name -contains "last_verified") -or -not $rule.last_verified) {
      $stale += [pscustomobject]@{
        RuleId = $rule.id
        Reason = "no last_verified date set"
      }
      continue
    }

    $verified = [DateTime]::MinValue
    if (-not [DateTime]::TryParse($rule.last_verified, [ref]$verified)) {
      $stale += [pscustomobject]@{
        RuleId = $rule.id
        Reason = ("unparseable last_verified value '{0}'" -f $rule.last_verified)
      }
      continue
    }

    if ($verified -lt $cutoff) {
      $age = ((Get-Date) - $verified).Days
      $stale += [pscustomobject]@{
        RuleId = $rule.id
        Reason = ("last_verified {0} days ago (threshold {1})" -f $age, $threshold)
      }
    }
  }

  return $stale
}

function Get-KnownIssueMatches($Config, $TestRuns) {
  $matches = @()

  foreach ($rule in $Config.known_issue_rules) {
    foreach ($testRun in $TestRuns) {
      if ($rule.match_in -notcontains "test_log") {
        continue
      }

      $matched = $false
      if ($rule.pattern_type -eq "literal") {
        $matched = $testRun.Output.Contains($rule.pattern)
      } else {
        $matched = [regex]::IsMatch($testRun.Output, $rule.pattern)
      }

      if ($matched) {
        $matches += [pscustomobject]@{
          RuleId = $rule.id
          Name = $rule.name
          Source = $testRun.Label
          Status = $rule.status
          Description = $rule.description
        }
      }
    }
  }

  return $matches
}

$repoRoot = (Get-Location).Path
$config = Get-Content -LiteralPath $ConfigPath -Raw | ConvertFrom-Json

foreach ($marker in $config.repo.root_markers) {
  if (-not (Test-Path -LiteralPath (Join-Path $repoRoot $marker))) {
    throw "Repo root marker '$marker' was not found. Run the audit from the repository root."
  }
}

$currentBranch = (& git rev-parse --abbrev-ref HEAD).Trim()
if (-not $Branch) {
  $Branch = $currentBranch
}

$baseBranch = Get-BranchBase -Config $config -BranchName $Branch -Fallback $Base
$safeBranchName = Sanitize-Name $Branch

if (-not $OutputDir) {
  $OutputDir = Join-Path $repoRoot $config.defaults.report_root
  $OutputDir = Join-Path $OutputDir $safeBranchName
}

if (Test-Path -LiteralPath $OutputDir) {
  Remove-Item -LiteralPath $OutputDir -Recurse -Force
}
New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null

$reportDate = (Get-Date).ToString("s")
$statusResult = Invoke-Git @("status", "--short", "--branch")
$commitsResult = Invoke-Git @("log", "--oneline", "--decorate", "-$($config.defaults.commit_log_count)", "$baseBranch..$Branch")
$diffStatResult = Invoke-Git @("diff", "$baseBranch...$Branch", "--stat")
$branchChangedFilesResult = Invoke-Git @("diff", "$baseBranch...$Branch", "--name-only")
$branchChangedFiles = @($branchChangedFilesResult.Output -split "`r?`n" | Where-Object { $_ -and $_.Trim() -ne "" })
$workingTreeFiles = Get-WorkingTreeFiles
$changedFiles = Filter-ExcludedPaths -Config $config -Paths @($branchChangedFiles + $workingTreeFiles)
$branchChangedFiles = Filter-ExcludedPaths -Config $config -Paths $branchChangedFiles
$workingTreeFiles = Filter-ExcludedPaths -Config $config -Paths $workingTreeFiles
$classifications = Classify-ChangedFiles -Config $config -ChangedFiles $changedFiles
$selectedTests = @()
if (-not $NoTests -and [bool]$config.defaults.run_tests) {
  $selectedTests = Select-Tests -Config $config -ChangedFiles $changedFiles
}

$testRuns = @()
if (@($selectedTests).Count -gt 0) {
  if ($Branch -ne $currentBranch) {
    $testRuns += [pscustomobject]@{
      Label = "tests-skipped"
      ExitCode = 0
      Output = "Tests were skipped because target branch '$Branch' is not the checked out branch '$currentBranch'."
    }
  } else {
    foreach ($test in $selectedTests) {
      if ($test.RunMode -eq "custom-command" -and $test.Command) {
        $result = Invoke-CommandCapture -FilePath "powershell" -Arguments @("-NoProfile", "-Command", $test.Command) -WorkingDirectory $repoRoot
      } else {
        $jestCmd = Join-Path $repoRoot "node_modules\\.bin\\jest.cmd"
        if (-not (Test-Path -LiteralPath $jestCmd)) {
          $jestCmd = Join-Path $repoRoot "node_modules\\.bin\\jest"
        }

        $args = @($test.Test) + @($config.defaults.jest_args)
        $result = Invoke-CommandCapture -FilePath $jestCmd -Arguments $args -WorkingDirectory $repoRoot
      }

      $testRuns += [pscustomobject]@{
        Label = $test.Test
        ExitCode = $result.ExitCode
        Output = $result.Output
        Reason = $test.Reason
      }

      $logName = "test-" + (Sanitize-Name ($test.Test -replace '[\\/]', '-')) + ".log"
      Write-Text -Path (Join-Path $OutputDir $logName) -Content $result.Output
    }
  }
}

$fullSuiteRun = $null
if ($FullTests -and -not $NoTests) {
  if ($Branch -ne $currentBranch) {
    $fullSuiteRun = [pscustomobject]@{
      Label = "full-suite"
      ExitCode = 0
      Output = "Full suite skipped because target branch '$Branch' is not the checked out branch '$currentBranch'."
      Reason = "Full Jest suite (-FullTests)"
    }
  } else {
    $jestCmd = Join-Path $repoRoot "node_modules\.bin\jest.cmd"
    if (-not (Test-Path -LiteralPath $jestCmd)) {
      $jestCmd = Join-Path $repoRoot "node_modules\.bin\jest"
    }

    $jestArgs = @($config.defaults.jest_args)
    $result = Invoke-CommandCapture -FilePath $jestCmd -Arguments $jestArgs -WorkingDirectory $repoRoot

    $fullSuiteRun = [pscustomobject]@{
      Label = "full-suite"
      ExitCode = $result.ExitCode
      Output = $result.Output
      Reason = "Full Jest suite (-FullTests)"
    }

    Write-Text -Path (Join-Path $OutputDir "full-test-log.txt") -Content $result.Output
  }

  $testRuns += $fullSuiteRun
}

function Parse-JestSummary([string]$Output) {
  $suiteLine = ([regex]::Match($Output, 'Test Suites:.*$', 'Multiline')).Value
  $testLine = ([regex]::Match($Output, 'Tests:\s+.*$', 'Multiline')).Value
  $timeLine = ([regex]::Match($Output, 'Time:\s+.*$', 'Multiline')).Value
  $fallback = ""

  if (-not $suiteLine.Trim()) {
    $failCount = ([regex]::Matches($Output, '(?m)^FAIL\s')).Count
    $passCount = ([regex]::Matches($Output, '(?m)^PASS\s')).Count
    if ($failCount -gt 0 -or $passCount -gt 0) {
      $suiteLine = "Test Suites: $failCount failed, $passCount passed, $($failCount + $passCount) total"
      $fallback = "(jest summary missing - counted from per-file FAIL/PASS lines; runner likely crashed before finishing)"
    }
  }

  return [pscustomobject]@{
    Suites = $suiteLine.Trim()
    Tests = $testLine.Trim()
    Time = $timeLine.Trim()
    Fallback = $fallback
  }
}

$artifacts = @()
if (-not $NoArtifactScan -and [bool]$config.defaults.scan_artifacts) {
  $artifacts = Scan-Artifacts -Config $config -RepoRoot $repoRoot
}

$redFlags = Get-RedFlags -Config $config -Artifacts $artifacts -TestRuns $testRuns
$knownIssues = Get-KnownIssueMatches -Config $config -TestRuns $testRuns
$staleRules = Get-StaleKnownIssueRules -Config $config

Write-Text -Path (Join-Path $OutputDir "branch-info.txt") -Content @"
Branch: $Branch
Current branch: $currentBranch
Base branch: $baseBranch
Report date: $reportDate
"@

Write-Text -Path (Join-Path $OutputDir "git-status.txt") -Content $statusResult.Output
Write-Text -Path (Join-Path $OutputDir "recent-commits.txt") -Content $commitsResult.Output
Write-Text -Path (Join-Path $OutputDir "diff-stat.txt") -Content $diffStatResult.Output
Write-Text -Path (Join-Path $OutputDir "changed-files.txt") -Content ($changedFiles -join [Environment]::NewLine)
Write-Text -Path (Join-Path $OutputDir "branch-changed-files.txt") -Content ($branchChangedFiles -join [Environment]::NewLine)
Write-Text -Path (Join-Path $OutputDir "working-tree-files.txt") -Content ($workingTreeFiles -join [Environment]::NewLine)

$classificationLines = foreach ($classification in $classifications) {
  "[{0}] {1} ({2})" -f $classification.Category, $classification.Name, $classification.RiskHint
  foreach ($file in $classification.Files) {
    "  - $file"
  }
}
Write-Text -Path (Join-Path $OutputDir "changed-files-by-category.txt") -Content ($classificationLines -join [Environment]::NewLine)

$testsRunLines = foreach ($test in $selectedTests) {
  "{0} :: {1}" -f $test.Test, $test.Reason
}
Write-Text -Path (Join-Path $OutputDir "tests-run.txt") -Content ($testsRunLines -join [Environment]::NewLine)

$artifactLines = foreach ($artifact in $artifacts) {
  "{0} :: {1}" -f $artifact.Category, $artifact.Path
}
Write-Text -Path (Join-Path $OutputDir "generated-files.txt") -Content ($artifactLines -join [Environment]::NewLine)

$redFlagLines = foreach ($flag in $redFlags) {
  "[{0}] {1} :: {2}" -f $flag.Severity.ToUpperInvariant(), $flag.RuleId, $flag.Source
}
Write-Text -Path (Join-Path $OutputDir "red-flags.txt") -Content ($redFlagLines -join [Environment]::NewLine)

$knownIssueLines = foreach ($issue in $knownIssues) {
  "[{0}] {1} :: {2}" -f $issue.Status.ToUpperInvariant(), $issue.Name, $issue.Source
}
Write-Text -Path (Join-Path $OutputDir "known-issues.txt") -Content ($knownIssueLines -join [Environment]::NewLine)

$staleRuleLines = foreach ($entry in $staleRules) {
  "[STALE] {0} :: {1}" -f $entry.RuleId, $entry.Reason
}
Write-Text -Path (Join-Path $OutputDir "stale-rules.txt") -Content ($staleRuleLines -join [Environment]::NewLine)

$summary = New-Object System.Collections.Generic.List[string]
$summary.Add("# Branch Audit Report")
$summary.Add("")
$summary.Add(('- Branch: {0}' -f $Branch))
$summary.Add(('- Base branch: {0}' -f $baseBranch))
$summary.Add(('- Generated at: {0}' -f $reportDate))
$summary.Add(('- Report folder: {0}' -f $OutputDir))
$summary.Add("")
$summary.Add("## Branch Purpose Guess")
$summary.Add("")
if ($commitsResult.Output.Trim()) {
  $summary.Add("Recent commits ahead of base:")
  foreach ($line in ($commitsResult.Output -split "`r?`n")) {
    if ($line.Trim()) {
      $summary.Add("- $line")
    }
  }
} else {
  $summary.Add("No commits ahead of the base branch were detected.")
}
$summary.Add("")
$summary.Add("## Changed Files")
$summary.Add("")
if (@($changedFiles).Count -gt 0) {
  foreach ($file in $changedFiles) {
    $summary.Add("- $file")
  }
} else {
  $summary.Add("No changed files relative to the base branch were detected.")
}
$summary.Add("")
$summary.Add("## Classifications")
$summary.Add("")
if (@($classifications).Count -gt 0) {
  foreach ($classification in $classifications) {
    $summary.Add(("- {0} / {1}: {2}" -f $classification.Category, $classification.RiskHint, $classification.Reason))
  }
} else {
  $summary.Add("No classification rules matched the current diff.")
}
$summary.Add("")
$summary.Add("## Tests Run")
$summary.Add("")
if (@($selectedTests).Count -gt 0) {
  foreach ($test in $selectedTests) {
    $matchingRun = $testRuns | Where-Object { $_.Label -eq $test.Test } | Select-Object -First 1
    if ($matchingRun) {
      $status = if ($matchingRun.ExitCode -eq 0) { "pass" } else { "fail" }
      $summary.Add(("- {0}: {1}" -f $test.Test, $status))
    } else {
      $summary.Add(("- {0}: not run" -f $test.Test))
    }
  }
} else {
  $summary.Add("No mapped tests were selected.")
}

if ($fullSuiteRun) {
  $summary.Add("")
  $status = if ($fullSuiteRun.ExitCode -eq 0) { "pass" } else { "fail" }
  $summary.Add(("- full-suite (-FullTests): {0}" -f $status))
  $parsed = Parse-JestSummary $fullSuiteRun.Output
  if ($parsed.Suites)   { $summary.Add(("  - {0}" -f $parsed.Suites)) }
  if ($parsed.Tests)    { $summary.Add(("  - {0}" -f $parsed.Tests)) }
  if ($parsed.Time)     { $summary.Add(("  - {0}" -f $parsed.Time)) }
  if ($parsed.Fallback) { $summary.Add(("  - {0}" -f $parsed.Fallback)) }
  $summary.Add("  - Raw log: full-test-log.txt")
}
$summary.Add("")
$summary.Add("## Failures Observed")
$summary.Add("")
$failedRuns = @($testRuns | Where-Object { $_.ExitCode -ne 0 })
if (@($failedRuns).Count -gt 0) {
  foreach ($run in $failedRuns) {
    $firstLine = ($run.Output -split "`r?`n" | Where-Object { $_.Trim() } | Select-Object -First 1)
    $summary.Add(("- {0}: {1}" -f $run.Label, $firstLine))
  }
} else {
  $summary.Add("No failing test runs were recorded.")
}
$summary.Add("")
$summary.Add("## Artifacts Found")
$summary.Add("")
if (@($artifacts).Count -gt 0) {
  foreach ($artifact in $artifacts) {
    $summary.Add(("- {0}: {1}" -f $artifact.Category, $artifact.Path))
  }
} else {
  $summary.Add("No artifacts matched the configured artifact roots.")
}
$summary.Add("")
$summary.Add("## Red Flags")
$summary.Add("")
if (@($redFlags).Count -gt 0) {
  foreach ($flag in $redFlags) {
    $summary.Add(("- {0} in {1}: {2}" -f $flag.RuleId, $flag.Source, $flag.Description))
  }
} else {
  $summary.Add("No configured red-flag patterns were detected.")
}
$summary.Add("")
$summary.Add("## Known Issue Matches")
$summary.Add("")
if (@($knownIssues).Count -gt 0) {
  foreach ($issue in $knownIssues) {
    $summary.Add(("- {0} from {1}: {2}" -f $issue.Name, $issue.Source, $issue.Description))
  }
} else {
  $summary.Add("No known issue patterns were matched.")
}
$summary.Add("")
$summary.Add("## Stale Known-Issue Rules")
$summary.Add("")
if (@($staleRules).Count -gt 0) {
  foreach ($entry in $staleRules) {
    $summary.Add(("- {0}: {1} - re-verify or remove" -f $entry.RuleId, $entry.Reason))
  }
} else {
  $summary.Add("All known-issue rules have been verified recently.")
}
$summary.Add("")
$summary.Add("## Manual Review")
$summary.Add("")
foreach ($item in $config.reporting.manual_review_checklist) {
  $summary.Add("- $item")
}

Write-Text -Path (Join-Path $OutputDir "summary.md") -Content ($summary -join [Environment]::NewLine)

Write-Host "Audit report written to: $OutputDir"
