# Branches

This file documents every **active** branch — its intent, status, and invariants. The `/audit` skill reads this file to apply branch-specific drift checks. Stale/abandoned branches are intentionally not listed; if you decide to keep one alive, add it here.

## How invariants work

Each branch can declare patterns that must (or must not) appear in the codebase:
- **must_contain** — pattern + scope; audit fails if absent
- **must_not_contain** — pattern + scope; audit fails if present
- **should_contain** — pattern + scope; audit warns if absent (softer than must)

Patterns are case-insensitive ripgrep regexes unless noted. Scopes are glob patterns.

---

## master

- **Intent:** Production / release branch — releases publish from here
- **Owner:** Shared; Marcelo Monteiro is the integrator
- **Status:** Stable, currently Handlebars-based templating
- **Merge target:** `github-release` (mirror only)
- **Invariants:**
  - **must_contain:** `"handlebars"` in `package.json`
  - **must_contain:** `*.hbs` files under `public/templates/`
- **Notes:** Only branch where CI runs. Pushes trigger publish to Sonatype Nexus. Will flip invariants once `refactor/liquidjs` merges.

## dev-package

- **Intent:** Integration / pre-release staging where features merge before going to master
- **Owner:** Shared; tracks beta versioning (`[v. 0.1.0-beta.XX]`)
- **Status:** Active integration branch
- **Merge target:** `master`
- **Invariants:** Inherits from master until liquidjs merges in. Currently same as master.

## refactor/liquidjs

- **Intent:** Migrate the templating engine from Handlebars to LiquidJS
- **Owner:** carizadias
- **Status:** Active, ~12 commits ahead of master, close to ready for review
- **Merge target:** `master` (likely via `dev-package`)
- **Invariants:**
  - **must_not_contain:** `handlebars` in `src/**/*.{ts,tsx}`
  - **must_not_contain:** `hbsRenderer` in `src/**/*.{ts,tsx}`
  - **must_not_contain:** any `*.hbs` files under `public/templates/`
  - **must_not_contain:** `Handlebars` in `README.md`
  - **should_contain:** `"liquidjs"` in `package.json`
  - **should_contain:** `*.liquid` files under `public/templates/`

## refactor/workspace-migration

- **Intent:** Remove workspace-management functionality (moved to a separate repo)
- **Owner:** carizadias
- **Status:** Possibly redundant — `refactor/liquidjs` already removes workspace templates. Verify with the team before continuing work here.
- **Merge target:** `master` (or candidate for abandonment)
- **Invariants:**
  - **must_not_contain:** any path under `src/modules/workspace/`
  - **must_not_contain:** `newWorkspace` export in `src/index.ts`

## feat/data-table-subcomponent

- **Intent:** Add table row subcomponents (expandable / nested rows in data tables)
- **Owner:** Shared (you and Marcelo)
- **Status:** Likely already merged into `dev-package` — commits appear on both branches. Verify before doing more work.
- **Merge target:** `dev-package`
- **Invariants:** Inherits from `dev-package`.

## enhancement/code-format

- **Intent:** Format generated template outputs using Prettier (with fallback on errors)
- **Owner:** Ivanick.Santos (teammate)
- **Status:** Open; last touched 2026-04-08, may be waiting on review
- **Merge target:** `master`
- **Invariants:**
  - **should_contain:** `prettier` import in template-rendering code (likely under `src/helpers/` or `src/modules/`)
  - Inherits handlebars/liquidjs state from its merge target.

---

## Maintenance notes

- A branch's invariants change when its **target end-state** changes. When `refactor/liquidjs` merges to `master`, flip master's invariants: `handlebars` → must_not_contain, `liquidjs` → must_contain.
- Add a new entry whenever you create a non-trivial feature branch.
- Remove or archive an entry when its branch is merged + deleted.
- Stale branches (>90 days inactive) listed by `/audit` should be reviewed and either added here with current invariants or scheduled for deletion.
