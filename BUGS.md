# Bug Log

A running log of reported bugs. Start populating from the **next** reported bug — don't try to backfill (`git log --grep='^fix'` already covers history).

## How to use this file

When a bug is reported:

1. **Reproduce it.** Ask for the JSON input that triggered it if needed.
2. **Find the root cause, not just the symptom.** "Made the test pass" ≠ "fixed the bug."
3. **Write a failing test, then fix.** This is how you stop the bug from coming back.
4. **Add a row to the table below.**
5. **Once a month, scan for patterns.** They tell you which area to invest in next (more tests, better validation, doc updates, schema tightening).

Keep entries short. The point is the pattern, not a novel.

## Bugs

| # | Date | Reporter | What was wrong | Where | Root cause | Fix commit | Lesson |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-04-27 | audit (`malformed-liquid-conditional` rule) | Liquid `{% if %}` tag lost both its operand and string literal: `{% if x and == -%}` would throw `ParseError` at render time | `public/templates/components/form/types/type.liquid` lines 4 and 12 | Template authoring slip during refactor — two `if` conditions had their right-hand operand and the comparison literal dropped, leaving `and ==` with nothing to compare | `2e8383e` on `origin/dev-package` | Liquid syntax isn't validated by `tsc` or `npm run build` — only caught after we added a red-flag rule that scans source templates. CI needs a render-time or syntax-check step on `.liquid` files before merge |

## Patterns I'm watching for

Populate as patterns emerge. Examples of what a pattern entry looks like:

- *"Table dropdown bugs — 3 reports in 2 months. All involve child property propagation. Next time table-system code changes, run extra tests on dropdown rendering."*
- *"UTF-8 / encoding bugs in generated output — 2 reports. Suspect template-literal escaping in the renderer."*

(empty for now — fill in once 5+ bugs are logged)
