# Branch Audit Workflow Usage

## Quick Start

From the repository root:

```powershell
powershell -ExecutionPolicy Bypass -File .\tools\audit-branch.ps1
```

This audits the current branch against the configured default base branch and writes a report under `audit-reports/<branch>/`.

## Common Examples

Audit the current branch:

```powershell
powershell -ExecutionPolicy Bypass -File .\tools\audit-branch.ps1
```

Audit the current branch against an explicit base:

```powershell
powershell -ExecutionPolicy Bypass -File .\tools\audit-branch.ps1 -Base dev-package
```

Audit a named branch without running tests:

```powershell
powershell -ExecutionPolicy Bypass -File .\tools\audit-branch.ps1 -Branch fix/component-rendering-bugs -NoTests
```

## What The Report Tells You

The report is evidence collection, not a final verdict.

Read `summary.md` in this order:

1. branch purpose guess
2. changed files
3. classifications
4. test failures
5. red flags
6. known issue matches
7. manual review checklist

## What To Treat As Manual Review

The workflow helps you collect:

- what changed
- which tests were selected
- which tests failed
- which generated files look suspicious
- which failures match known recurring issues

You still decide:

- whether a failure is branch-specific or pre-existing
- whether a workaround is acceptable
- whether a finding is a blocker
- what to tell reviewers or mentors
