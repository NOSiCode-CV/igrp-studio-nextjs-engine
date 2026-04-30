---
name: audit
description: Branch-aware pre-push audit. Runs tests, build, type check, and checks branch invariants from BRANCHES.md. Always read-only. Use before pushing for review or as a weekly health check.
disable-model-invocation: true
allowed-tools: Bash, Read, Glob, Grep
---

# `/audit` — Branch-aware pre-push audit

Runs a structured health check on the current branch and produces a one-page report. **Makes no changes to code, no commits, no pushes.** Read-only by design — you decide what to act on.

## Procedure

Run these steps in order. Run independent commands in parallel where possible.

### Step 1 — Detect current branch and load context

1. `git rev-parse --abbrev-ref HEAD` → capture current branch name.
2. Read [BRANCHES.md](../../../BRANCHES.md) and find the entry for the current branch.
3. If the branch is **not in BRANCHES.md**, treat it as a feature branch from `master` and warn at the end of the report (suggest adding it).
4. Determine the **merge target** for the branch (from BRANCHES.md, or default to `master`).
5. Read [CLAUDE.md](../../../CLAUDE.md) — extract the "Fragile zones" section for use in Step 4.

### Step 2 — Universal checks (always run)

Run in parallel where possible:

- `npm test` — capture pass/fail/skip counts and any failed test names.
- `npm run build` — capture success or first error message.
- `npx tsc --noEmit` — capture type errors (often duplicates build, but cheaper to spot trouble).
- `git status --porcelain` — uncommitted changes? Untracked files?
- `git log <merge-target>..HEAD --oneline` — list commits ahead of merge target.
- `git diff <merge-target>..HEAD --stat` — files changed and line counts.

### Step 3 — Branch-aware checks (read invariants from BRANCHES.md)

For each invariant declared for the current branch:

- **must_contain / should_contain:** verify the pattern is present in the declared scope.
- **must_not_contain:** verify the pattern is absent in the declared scope. If present, list locations (file:line where possible).

Severity:
- `must_*` violations → `[ FAIL ]`
- `should_*` violations → `[ WARN ]`
- Met invariants → `[ PASS ]`

If the branch has no entry in BRANCHES.md, skip this step and add a closing warning that the branch isn't documented.

### Step 4 — Diff-aware checks

From the file list in Step 2's `git diff --stat`:

1. **Fragile-zone touch detection.** Cross-reference changed paths with the "Fragile zones" list from CLAUDE.md (table system, renderers / child properties, zod schemas, date components, encoding/formatting). For each fragile zone touched, report `[ WARN ] Touched fragile zone <name> — verify tests cover the change.`

2. **Debug leftovers in the diff.** Search `git diff <merge-target>..HEAD` for: `console.log`, `TODO`, `FIXME`, `XXX`, `debugger`. List file:line locations. Empty list → `[ PASS ]`.

3. **Cross-branch contamination.** If the branch declares `must_not_contain` for a pattern (e.g. `handlebars` on `refactor/liquidjs`), search the diff specifically for newly-added lines matching that pattern. This catches accidental reintroduction from merges. Same idea reversed for handlebars-bound branches that shouldn't add liquidjs in a single feature commit.

### Step 5 — Repo hygiene (informational, non-blocking)

- **Stale branches:** `git for-each-ref --format='%(refname:short) %(committerdate:relative)' refs/remotes/origin --sort=committerdate | head -20`. Filter to branches >90 days old that are not in BRANCHES.md. Report as cleanup candidates.
- **Bug log freshness:** Read [BUGS.md](../../../BUGS.md). If the table only contains the placeholder row, suggest starting to populate. If the most recent entry is >30 days old, mention it.
- **Recent fix-commit themes:** `git log --all --grep='^fix' --oneline -i | head -10` — list as a reminder of currently fragile areas.

## Report format

Always produce the report in this exact shape (severity prefix in brackets, one line per check):

```
=== /audit report — <branch> — <ISO date> ===

[ PASS|FAIL|WARN ] Tests              <pass count, fail count, skip count>
[ PASS|FAIL|WARN ] Build              <ok | first error>
[ PASS|FAIL|WARN ] Type check         <ok | error count and first error>
[ INFO|WARN     ] Branch state       <clean | dirty: N files>
[ INFO          ] Branch diff        <N files changed, +X/-Y lines vs <merge-target>>

— Branch invariants (from BRANCHES.md) —
[ PASS|FAIL|WARN ] <invariant>       <details / locations>
...

— Diff-aware —
[ INFO|WARN     ] Fragile zones     <which were touched, or "none">
[ PASS|WARN     ] Debug leftovers   <count and locations, or "none">
[ PASS|WARN     ] Contamination     <unexpected pattern reintroduced, or "none">

— Hygiene —
[ INFO          ] Stale branches    <names>
[ INFO          ] Bug log           <freshness note>
[ INFO          ] Recent fix themes <list>

=== Action items (highest priority first) ===
1. <specific action — file:line where applicable>
2. ...
```

## Rules

- **Never modify files.** Read-only audit.
- **Never commit, push, or open PRs.** The user does that after reviewing the report.
- **Group action items by severity:** `FAIL` items first, then `WARN`, then `INFO`. Within a severity, order by impact.
- **Be specific in action items.** "Fix the build" → ❌. "Fix the type error in [src/renderers/liquidRenderer.ts:42](../../../src/renderers/liquidRenderer.ts) — cannot find name 'X'" → ✅.
- **If a tool fails to run** (e.g. `npm test` errors before reporting), output `[ FAIL ] Tests — could not run: <error>` rather than skipping the line.
- **If the branch isn't in BRANCHES.md**, run universal + diff-aware checks but skip branch-aware. Close the report with: *"Branch `<name>` is not documented in BRANCHES.md — consider adding an entry so future audits can apply branch-specific checks."*
