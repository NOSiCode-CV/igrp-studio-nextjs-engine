# Branch Audit Workflow Spec

## Purpose

This workflow audits one branch at a time and produces a defendable draft report for maintainers.
It collects git history, changed files, subsystem classifications, mapped test results, generated artifact paths, and suspicious output patterns.
It does not decide final severity or root cause automatically, and it does not modify the repository.

## Scope

In scope:

- current branch or explicitly named branch
- branch-to-base comparison
- path-based subsystem classification
- pattern-based test selection
- running selected tests
- saving raw logs and a Markdown summary
- scanning known generated artifact roots for suspicious output patterns
- tagging known recurring failures

Out of scope:

- fixing code
- switching branches automatically
- rewriting history
- auditing every branch in one command
- determining final bug ownership automatically

## Command Contract

The repo-local audit command is:

```powershell
powershell -ExecutionPolicy Bypass -File .\tools\audit-branch.ps1
```

Optional arguments:

- `-Branch <name>`
- `-Base <name>`
- `-OutputDir <path>`
- `-NoTests`
- `-NoArtifactScan`

## Inputs

- target branch, defaulting to the checked out branch
- base branch, resolved from config unless explicitly provided
- audit config file at `tools/audit-config.json`
- repo working tree and available test commands

## Outputs

Reports are written under `audit-reports/<branch>/` by default.

Expected artifacts:

- `branch-info.txt`
- `git-status.txt`
- `recent-commits.txt`
- `diff-stat.txt`
- `changed-files.txt`
- `changed-files-by-category.txt`
- `tests-run.txt`
- `generated-files.txt`
- `red-flags.txt`
- `known-issues.txt`
- `summary.md`
- one raw log per executed test

## Safety Rules

- The workflow must not commit, push, reset, rebase, cherry-pick, or delete source files.
- It must not switch branches automatically.
- It may remove and recreate only its own report output folder.
- If the target branch is not the checked out branch, test execution is skipped rather than forcing a checkout.

## Workflow Steps

1. Resolve target branch and base branch.
2. Capture branch state and recent commits.
3. Compute changed files relative to the base branch.
4. Classify changed files by subsystem/risk bucket.
5. Select relevant tests from config.
6. Run selected tests in stable mode.
7. Capture generated artifact paths from configured roots.
8. Scan artifacts and logs for red-flag patterns.
9. Tag known recurring failures.
10. Write raw evidence files.
11. Write a Markdown summary for manual review.

## Configuration Model

The workflow is driven by `tools/audit-config.json`.

Top-level keys:

- `repo`
- `defaults`
- `base_branch_rules`
- `classification_rules`
- `test_mapping_rules`
- `artifact_rules`
- `red_flag_rules`
- `known_issue_rules`
- `reporting`

Path matching uses globs.
Content scanning rules declare `literal` or `regex` explicitly.

## Non-Goals For V1

- multi-branch batch mode
- automatic code fixes
- automatic branch switching
- automatic issue creation
- automatic PR comments
- semantic root-cause inference beyond configured heuristics
