# nextjs-engine — Project Memory

This file is loaded at the start of every Claude Code session. Keep it accurate. When something here becomes wrong, fix it immediately — a stale CLAUDE.md is worse than no CLAUDE.md.

## What this repo is

`@igrp/igrp-studio-nextjs-engine` is a code-generation library used as a **dependency** by iGRP Studio. It is **not** a standalone tool. Studio injects it and calls its API methods to scaffold Next.js applications, pages, components, services, and code snippets.

- **Input:** JSON configuration object + target file system path
- **Output:** Next.js code, Docker Compose service definitions, code snippets — written to disk
- **Public API:** see [src/index.ts](src/index.ts) — `newWorkspace`, `newApp`, `newPage`, `newComponent`, `addComponentToPage`, plus `registerComponents` / `registerServices` / `registerCodeSnippets`

## Architecture in 60 seconds

The engine has **three register-pattern systems** (components, Docker services, code snippets). All three follow the same shape:

```
<system>/<item>/
├── index.ts        # rendering logic
├── properties.ts   # JSON schema + defaults
```

Items are registered centrally in `<system>/register.ts`. Templates live in [public/templates/](public/templates/). Generation flow:

```
API call → schema validation → directory creation → template loading → data prep → template render → file write
```

Component rendering is **recursive**: children render inside parents. Three renderer modes: default (basic divs), template (for components needing instantiation), custom.

## Authoritative truth order

When answers conflict, resolve in this order:

1. [src/schema/](src/schema/) — validation truth
2. [src/components/register.ts](src/components/register.ts) — registry truth
3. `src/components/**/index.ts` + `properties.ts` — component behavior truth
4. `public/templates/**/*.{liquid,hbs}` — rendered code truth (file extension depends on branch — see [BRANCHES.md](BRANCHES.md))
5. [src/helpers/componentPropertiesHelper.ts](src/helpers/componentPropertiesHelper.ts) — value-resolution truth

## Branches and conventions

See [BRANCHES.md](BRANCHES.md) for per-branch intent, status, and invariants. Quick rules:

- **Branch naming:** `feat/`, `fix/`, `chore/`, `refactor/` prefixes. Short names.
- **Commit messages:** `fix: <what>`, `feat: <what>`, `chore: <what>`. Be specific — "fix: bug" is not specific.
- **Version tags** like `[v. 0.1.0-beta.XX]` are added on integration to `dev-package`, not on every commit. If you don't know the release process, don't add the tag.

## Release flow

```
feature branch → dev-package (integration / beta versioning) → master (release) → CI publishes to Sonatype Nexus
                                                                    └→ github-release (public mirror)
```

- **CI ([.gitlab-ci.yml](.gitlab-ci.yml)) only runs on `master`.** Feature branches have no automated checks. Local `/audit` is the only safety net before merge.
- Package publishes to `https://sonatype.nosi.cv/repository/igrp/`, **not** npmjs.com.

## Fragile zones (where bugs cluster)

Slow down here. Add tests when touching these:

- **Table system** — table cells, columns, filters, dropdown menu, row subcomponents
- **Renderers / child properties** — default renderer, content rendering, child-parent data mapping
- **Zod schemas** — generic types, nullable handling, "any" type edge cases
- **Date components** — date types, dynamic properties on date components
- **Encoding / formatting** — UTF-8 handling, indentation in generated output

Source: see the patterns in `git log --all --grep="^fix" --oneline` — these areas dominate the fix-commit history.

## Things that look wrong but aren't

- **[public/configs/README.md](public/configs/README.md)** is a Next.js boilerplate README copied into generated apps. It's a template artifact, not project documentation. Don't update it as if it described nextjs-engine.
- **[WORKSPACE_ENGINE_FIX_GUIDE.md](WORKSPACE_ENGINE_FIX_GUIDE.md)** is scratch notes from the workspace-removal refactor. Ignore unless on `refactor/workspace-migration`.
- **`__test__/output/`** is generated test output. Untracked is normal.
- **CI only runs on master** — by design (CI validates the release branch). Feature branches rely on local checks.
- **README.md may have doc drift** — when refactor/liquidjs lands, README still mentions Handlebars in many places. CLAUDE.md is the more current truth for AI sessions; README is for humans browsing the repo.

## How to test

- `npm test` — full Jest suite (this is what CI runs)
- `npm run build` — TypeScript compile + Vite build (catches type errors)
- `npx tsc --noEmit` — fast type check during development
- For template/renderer changes, also run the engine on a sample JSON and inspect the output manually
- **`/audit`** — pre-push checklist: runs all of the above + branch-specific drift checks

## Maintainer routine

1. **Before starting:** `git pull`, check open MRs, decide branch
2. **While working:** small commits, conventional prefixes, write tests for fragile-zone changes
3. **Before pushing:** run `/audit` — fix all `[ FAIL ]` and review all `[ WARN ]` before opening for review
4. **When a bug is reported:** reproduce → root cause → failing test → fix → log in [BUGS.md](BUGS.md)
5. **Weekly:** skim open MRs, prune stale branches, review BUGS.md for patterns

## See also

- [README.md](README.md) — public-facing project documentation (may have drift; treat CLAUDE.md as more current for AI sessions)
- [BRANCHES.md](BRANCHES.md) — per-branch invariants used by `/audit`
- [BUGS.md](BUGS.md) — running log of reported bugs
- [skills.md](skills.md) — JSON authoring spec for engine inputs (authoritative for input shape)
