# NextJS Engine JSON Configuration Skill

This document is a production-grade skill reference for AI models generating iGRP Frontend JSON configurations consumed by `nextjs-engine`.

It is designed to maximize correctness on:
- JSON root structure
- schema compatibility
- component naming and composition
- data/state/function wiring
- page/component/processStep generation behavior

---

## 1) Output Target and Scope

Generate a single JSON object compatible with one of:
- `type: "page"`
- `type: "component"`
- `type: "processStep"`

Never mix two root types in one JSON payload.

---

## 2) Canonical Root Structures

Use these as canonical shapes (schema-accurate + generator-friendly).

### 2.1 Page

```json
{
  "type": "page",
  "id": "page_xxxxxxxx",
  "pageName": "myPage",
  "path": "my-page-or-segment",
  "description": "optional",
  "useClient": true,
  "forceDynamic": false,
  "types": [],
  "imports": [],
  "states": [],
  "references": [],
  "functions": [],
  "actions": [],
  "args": [],
  "components": {
    "id": "page_myPage",
    "componentName": "page",
    "tag": "page_myPage",
    "properties": {},
    "interactions": {},
    "data": {},
    "children": []
  }
}
```

Schema-required keys for page:
- `type`
- `pageName`
- `path`
- `types`

---

### 2.2 Component

```json
{
  "type": "component",
  "id": "component_xxxxxxxx",
  "name": "MyComponent",
  "scope": "page",
  "pagePath": "optional-if-scope-page",
  "description": "optional",
  "useClient": true,
  "forceDynamic": false,
  "types": [],
  "imports": [],
  "states": [],
  "references": [],
  "functions": [],
  "actions": [],
  "args": [],
  "components": {
    "id": "component_myComponent",
    "componentName": "component",
    "tag": "component_myComponent",
    "properties": {},
    "interactions": {},
    "data": {},
    "children": []
  }
}
```

Schema-required keys for component:
- `type`
- `name`

---

### 2.3 Process Step

```json
{
  "type": "processStep",
  "id": "process_step_xxxxx",
  "name": "MyProcessStep",
  "key": "my-step-key",
  "description": "optional",
  "processKey": "process-key",
  "processVersion": "1",
  "projectArtifactId": "artifact-id",
  "taskKey": "task-key",
  "artifactVariables": [
    { "variable": "myVariable" }
  ],
  "useClient": true,
  "forceDynamic": false,
  "types": [],
  "imports": [],
  "states": [],
  "references": [],
  "functions": [],
  "actions": [],
  "args": [],
  "components": {
    "id": "process_step_component",
    "componentName": "processStep",
    "tag": "process_step_component",
    "properties": {},
    "interactions": {},
    "data": {},
    "children": []
  }
}
```

Schema-required keys for processStep:
- `type`
- `name`
- `key`
- `projectArtifactId`
- `taskKey`
- `artifactVariables`

---

## 3) Root Validation Constraints

### 3.1 IDs and patterns
- IDs must be alphanumeric/underscore-safe (no spaces, no special symbols).
- Paths must follow Next.js-like conventions (static segments, `[param]`, `[...param]`, `[[...param]]`, route groups).

### 3.2 Strict object shape
- Avoid introducing unknown top-level keys.
- Prefer schema-defined keys only.
- For optional arrays, if unused, use `[]` or omit where nullable is allowed.

### 3.3 Required wrapper component by root type
- Page root `components.componentName` should be `page`.
- Component root `components.componentName` should be `component`.
- ProcessStep root `components.componentName` should be `processStep`.

---

## 4) Layout Node Contract (`components` tree)

Each layout node uses:

```json
{
  "id": "node_id",
  "componentName": "grid",
  "tag": "grid1",
  "properties": {},
  "interactions": {},
  "data": {},
  "style": {},
  "rules": [],
  "childProperties": {},
  "parentProperties": {},
  "content": "",
  "children": []
}
```

Practical rules:
- Always include `id`, `componentName`, `tag`.
- Prefer explicit empty objects (`{}`) over null for `properties`, `interactions`, `data`.
- Keep `children` as array for group/container components.
- `content` is mainly for text-like nodes.

---

## 5) Types, States, Functions, Imports

### 5.1 `types`

A type entry has:
- `name`
- `path`
- `fields` (required)
- optional `componentId`, `tags`, `isMainType`, `isEnum`, `definitionType`, custom instance names.

Field entries (`fields[]`) must include:
- `name`
- `componentId`
- `type`
- `required`

Supported special field flags:
- `nullable`
- `isList`
- `isKey`
- `defaultValue`
- nested `fields` for object shapes
- `validation` metadata

### 5.2 `states`

State object:
- `id`, `name`, `type` required
- optional `defaultValue`, `imports`, `isArray`, `isOptional`, `generate`

Important generation behavior:
- Reserved literals should remain code literals when appropriate (`undefined`, `null`, booleans, arrays, objects, numeric literals).
- Do not quote `undefined` as a string unless the functional requirement explicitly requires a literal string.

### 5.3 `functions` and `actions`

Function object:
- `id`, `name`, `code`, `returnValue`, `arguments` required
- optional `isAsync`, `path`, `imports`, `states`, `actions`

Arguments require:
- `type`, `name`, `isList`, `isOptional`, `isInterface`, `isFunction`, `isState`
- optional nested `functionParameters`

### 5.4 `imports`

Import entry:
- `namespace` required
- optional `id`

Use fully formed TS import namespace strings (including braces/paths).

---

## 6) Interaction and Data Binding Model

### 6.1 Interactions

Common shape:

```json
{
  "onClick": {
    "type": "function",
    "function": {
      "fnName": "myHandler",
      "fnCustomCode": { "imports": [] }
    }
  }
}
```

Guidelines:
- Use function references for action events.
- Keep event names valid for the target component.

### 6.2 Data binding

Data object usually binds component attributes to:
- state references
- inline value code
- generated references

Pattern:

```json
{
  "value": {
    "state": {
      "name": "myState",
      "type": "string",
      "defaultValue": "",
      "imports": [],
      "generate": true
    }
  }
}
```

---

## 7) Component Catalog (Registered)

Use these exact `componentName` values.

### 7.1 Structural and layout
- `page`
- `component`
- `processStep`
- `section`
- `container`
- `fragment`
- `flex`
- `grid`
- `columns`
- `column`
- `stack`
- `aspect`
- `separator`
- `card`
- `cardHeader`
- `cardContent`
- `cardFooter`
- `accordion`
- `accordionItem`
- `tabs`
- `tabsItem`
- `modalDialog`
- `modalDialogTrigger`
- `modalDialogContent`
- `modalDialogHeader`
- `modalDialogFooter`
- `modalDialogTitle`
- `modalDialogDescription`
- `modalDialogClose`

### 7.2 Typography and display
- `text`
- `span`
- `paragraph`
- `headline`
- `label`
- `icon`
- `image`
- `badge`
- `avatar`
- `statusBanner`
- `chat`
- `pdfViewer`
- `videoEmbed`
- `copyTo`

### 7.3 Forms and inputs
- `form`
- `formList`
- `inputText`
- `inputTextarea`
- `inputNumber`
- `inputPassword`
- `inputPhone`
- `inputSearch`
- `inputTime`
- `inputUrl`
- `inputHidden`
- `inputFile`
- `inputColor`
- `inputAddOn`
- `inputDatePicker`
- `inputDatePickerSingle`
- `combobox`
- `select`
- `checkbox`
- `radio`
- `switch`
- `button`

### 7.4 Date/Calendar pickers
- `datePickerSingle`
- `datePickerRange`
- `datePickerMultiple`
- `calendarSingle`
- `calendarSingleTime`
- `calendarRange`
- `calendarRangeTime`
- `calendarMultiple`
- `calendarMultipleTime`

### 7.5 Navigation and page context
- `pageHeader`
- `menuNavigation`
- `menuNavigationItem`
- `dropdown`
- `dropdownItem`

### 7.6 Information cards and lists
- `infoCard`
- `infoSection`
- `infoItem`
- `cardDetails`
- `cardDetailsItem`
- `repetitiveList`
- `textList`
- `textListItem`
- `textListItemContent`
- `textListSubItems`
- `statsCard`

### 7.7 Charts
- `areachart`
- `linechart`
- `piechart`
- `radarchart`
- `radialBarchart`
- `verticalBarchart`
- `horizontalBarchart`

### 7.8 Table system
- `table`
- `tableColumns`
- `tableRowSubcomponent`
- `tableFilters`
- `tableTextCell`
- `tableBadgeCell`
- `tableDateCell`
- `tableAmountCell`
- `tableLinkCell`
- `tableTooltipCell`
- `tableCheckboxCell`
- `tableExpanderCell`
- `tableHiddenCell`
- `tableInputFilter`
- `tableSelectFilter`
- `tableDateFilter`
- `tableDropdownFilter`
- `tableMinMaxFilter`
- `tableFacetedFilter`
- `tableActionListCell`
- `tableButtonListCell`
- `tableDropdownMenuCell`
- `tableAlertButton`
- `tableLinkButton`
- `tableModalButton`
- `tableAlertDropdownItem`
- `tableLinkDropdownItem`
- `tableCustomDropdownItem`
- `tableAlertAction`
- `tableLinkAction`
- `tableModalAction`

---

## 8) Legacy/Compatibility Notes

These names exist in source but may be disabled in registration flows or considered legacy in some generation policies:
- `slider`
- `carousel`
- `tableModalDropdownItem` (commented in some register flows)

If policy says a component is deprecated/forbidden, do not generate it even if legacy code still contains it.

---

## 9) Composition Rules You Must Enforce

1. `table` should own table-related children (`tableColumns`, filters, action cells).
2. `card` should contain `cardHeader`, `cardContent`, `cardFooter` where applicable.
3. `modalDialog` children should use modal subcomponents.
4. `tabs` should contain `tabsItem`.
5. `infoCard` should be composed via `infoSection` + `infoItem`.
6. `textList` should use `textListItem` + subcontent nodes.
7. Use `form` for submit lifecycle; use `formList` for repeated grouped fields.
8. For route args:
   - Only generate params signature/destructure if args are non-empty.
   - Never emit empty `params: Promise<{ }>` or `const { } = use(params)`.

---

## 10) JSON Authoring Rules for AI Models

### 10.1 Deterministic generation workflow
1. Decide root type (`page`, `component`, `processStep`).
2. Emit canonical root keys.
3. Build layout tree top-down with valid `componentName`.
4. Attach `types` for data contracts before binding states.
5. Attach `states` for UI/reactive state.
6. Attach `functions/actions`.
7. Wire `interactions` and `data`.
8. Validate naming and wrappers.

### 10.2 IDs and tags
- IDs should be stable and unique in document scope.
- Tags should be meaningful and unique when possible.

### 10.3 Safe defaults
- `types: []` always present for page/processStep.
- `imports/states/functions/actions/references/args` can be `[]` if not needed.
- `components` should never be missing for generation-ready payloads.

### 10.4 Reserved literal defaults
For default values intended as code literals, keep as literals:
- `undefined`
- `null`
- `true`/`false`
- numeric literals
- object/array literals

Avoid turning these into quoted strings unless the semantic requirement is text literal.

---

## 11) High-Confidence Templates for AI Use

### 11.1 Minimal valid page

```json
{
  "type": "page",
  "id": "page_sample_01",
  "pageName": "samplePage",
  "path": "sample-page",
  "forceDynamic": false,
  "types": [],
  "states": [],
  "functions": [],
  "components": {
    "id": "page_samplePage",
    "componentName": "page",
    "tag": "page_samplePage",
    "properties": {},
    "interactions": {},
    "data": {},
    "children": []
  },
  "imports": []
}
```

### 11.2 Minimal valid component

```json
{
  "type": "component",
  "id": "component_sample_01",
  "name": "SampleComponent",
  "scope": "page",
  "types": [],
  "states": [],
  "functions": [],
  "components": {
    "id": "component_sampleComponent",
    "componentName": "component",
    "tag": "component_sampleComponent",
    "properties": {},
    "interactions": {},
    "data": {},
    "children": []
  },
  "imports": []
}
```

### 11.3 Minimal valid processStep

```json
{
  "type": "processStep",
  "id": "processstep_sample_01",
  "name": "SampleProcessStep",
  "key": "sample-step",
  "processKey": "sample-process",
  "processVersion": "1",
  "projectArtifactId": "artifact",
  "taskKey": "task",
  "artifactVariables": [
    { "variable": "payload" }
  ],
  "types": [],
  "states": [],
  "functions": [],
  "components": {
    "id": "processstep_sample",
    "componentName": "processStep",
    "tag": "processstep_sample",
    "properties": {},
    "interactions": {},
    "data": {},
    "children": []
  },
  "imports": []
}
```

---

## 12) Critical Failure Patterns to Avoid

- Wrong `type` string (`Page`, `processstep`, etc.).
- Missing wrapper root component (`page/component/processStep`).
- Using unregistered/typo component names.
- Emitting empty params snippets in generated page functions.
- Quoting reserved code literals when literal code is required.
- Missing `types` on page/processStep roots.
- Setting malformed path segments.

---

## 13) Authoritative Source of Truth Inside Repository

When uncertain, resolve from:
1. `src/schema/*.ts` (validation truth)
2. `src/components/register.ts` (registry truth)
3. `src/components/**/index.ts` + `properties.ts` (component behavior truth)
4. `public/templates/**/*.liquid` (rendered code truth)
5. `src/helpers/componentPropertiesHelper.ts` (value-resolution truth)

This document should be updated whenever registry names, schema constraints, or template logic changes.
