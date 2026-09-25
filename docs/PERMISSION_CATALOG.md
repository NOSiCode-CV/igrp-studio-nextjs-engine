# Permission Catalog — Next.js Engine

Spec for persisting the **UI permission catalog** under `.igrpstudio/permissions.json`.

Today the Studio UI (`PermissionCatalogContext`) is **in-memory mock only**. This document defines the engine interfaces and operations required to create, read, update and delete permissions on disk.

Related:

- Runtime rules on layouts: `PermissionRuleDefinition` (already in engine types; saved with pages/components).
- Access Management sync shape: `access-management/.../docs/PAGE_DETECTION_SPECS.md` §4.2.
- Spring engine (different model — Java groups + endpoints): `studio/packages/spring-engine/permissions.md`.

---

## Goals

1. Single source of truth for project permission keys used by page/component **permission rules**.
2. CRUD via `@igrp/igrp-studio-nextjs-engine` (no code generation — manifest-only).
3. Studio IDE bridge: `window.engine.*` → IPC → `NextjsEngine` → engine package.
4. Stable on-disk format that can later sync to Access Management (`code` / `name` / `description`).

Non-goals (this iteration):

- Codegen of TypeScript guards or `can('…')` helpers.
- Sync call to Access Management API (Studio/engine only writes the file).
- Replacing Spring `PermissionConfig` / endpoint-based permissions.

---

## Storage

| Item | Value |
|------|--------|
| Path | `<basePath>/.igrpstudio/permissions.json` |
| Format | JSON object (versioned envelope) |
| Constant (proposed) | `DIRECTORIES.IGRPSTUDIO_PERMISSIONS` or `COMMON_FILES.PERMISSIONS = 'permissions.json'` under `DIRECTORIES.IGRPSTUDIO` |

### File shape

```json
{
  "version": 1,
  "updatedAt": "2026-07-27T12:00:00.000Z",
  "permissions": [
    {
      "id": "perm_01HZX…",
      "key": "inss.invoice_list.delete",
      "label": "Eliminar fatura",
      "description": "Permite eliminar faturas",
      "createdAt": "2026-07-27T11:00:00.000Z",
      "updatedAt": "2026-07-27T12:00:00.000Z"
    }
  ]
}
```

Notes:

- `usageCount` / `sources` are **derived at read time** by scanning page/component rules (optional engine helper). Do **not** require them on disk for CRUD.
- Key convention (Studio UX): `app.page.actionName` — lowercase, `[a-z][a-z0-9_.]*`.

### Access Management export mapping

When exporting/syncing later:

| Catalog field | AM field |
|---------------|----------|
| `key` | `code` |
| `label` | `name` |
| `description` | `description` |

---

## Interfaces (engine `types`)

Proposed additions to `src/interfaces/types.ts` (nextjs-engine).

```ts
/** On-disk / API catalog entry (persisted). */
export interface PermissionCatalogItem {
  id: string
  /** Unique permission key. Convention: app.page.actionName */
  key: string
  label: string
  description?: string
  createdAt: string
  updatedAt: string
}

/** Envelope written to `.igrpstudio/permissions.json`. */
export interface PermissionCatalogFile {
  version: 1
  updatedAt: string
  permissions: PermissionCatalogItem[]
}

/** Create input (id/timestamps assigned by engine). */
export interface CreatePermissionConfig {
  type: 'permission'
  key: string
  label: string
  description?: string
}

/** Update input — identify by id (preferred) or key. */
export interface UpdatePermissionConfig {
  type: 'permission'
  id?: string
  key?: string
  /** Fields to patch. `key` rename must remain unique. */
  patch: Partial<
    Pick<PermissionCatalogItem, 'key' | 'label' | 'description'>
  >
}

/** Delete input — identify by id (preferred) or key. */
export interface DeletePermissionConfig {
  type: 'permission'
  id?: string
  key?: string
}

/** Optional enrichment returned by list/get. */
export interface PermissionCatalogItemView extends PermissionCatalogItem {
  usageCount?: number
  sources?: string[]
}
```

### Validation rules

| Field | Rule |
|-------|------|
| `key` | Required; `/^[a-z][a-z0-9_.]*$/`; unique in catalog |
| `label` | Required; non-empty trimmed string |
| `description` | Optional string |
| Create | Reject if `key` already exists |
| Update | Reject if new `key` collides with another id |
| Delete | No-op or error if missing (engine should return clear error) |
| Delete (soft rule) | Prefer warn if `usageCount > 0` (Studio may confirm); engine may still delete |

AJV schema: `src/schema/permissionCatalogConfig.ts` → `validateCreatePermission` / `validateUpdatePermission` / `validateDeletePermission`.

---

## Engine public API

Add to `@igrp/igrp-studio-nextjs-engine` public exports (`src/index.ts`):

```ts
/** Load catalog from disk. Missing file → empty catalog (version 1). */
getPermissions(
  basePath: string,
  options?: { withUsage?: boolean }
): Promise<PermissionCatalogItemView[]>

/** Create one permission and persist catalog. Returns created item. */
createPermission(
  config: CreatePermissionConfig,
  basePath: string
): Promise<PermissionCatalogItem>

/** Update one permission and persist catalog. Returns updated item. */
updatePermission(
  config: UpdatePermissionConfig,
  basePath: string
): Promise<PermissionCatalogItem>

/** Delete one permission and persist catalog. */
deletePermission(
  config: DeletePermissionConfig,
  basePath: string
): Promise<void>

/** Replace entire catalog (bulk save / import). */
savePermissions(
  catalog: PermissionCatalogFile | PermissionCatalogItem[],
  basePath: string
): Promise<PermissionCatalogFile>
```

### Suggested modules

```
src/modules/permission/
  getPermissions.ts
  createPermission.ts
  updatePermission.ts
  deletePermission.ts
  savePermissions.ts          # write envelope
  loadPermissionCatalog.ts    # read + migrate empty/legacy
  computePermissionUsage.ts   # optional: scan pages/components rules
```

### Behaviour

1. **createPermission**
   - Validate `CreatePermissionConfig`.
   - Load catalog (create empty if missing).
   - Ensure `key` unique.
   - Assign `id` (e.g. ulid/uuid), `createdAt` / `updatedAt` = now ISO.
   - Append → write `.igrpstudio/permissions.json`.
   - Return created item.

2. **updatePermission**
   - Validate; resolve item by `id` or `key`.
   - Apply `patch`; bump `updatedAt`.
   - If renaming `key`, ensure uniqueness.
   - Persist → return updated item.

3. **deletePermission**
   - Resolve by `id` or `key`.
   - Remove from array → persist.
   - Does **not** auto-remove `PermissionRuleDefinition` from pages (Studio responsibility / follow-up).

4. **getPermissions**
   - Read file; if absent return `[]`.
   - If `withUsage: true`, scan `.igrpstudio/pages` and `.igrpstudio/components` for `rules[].type === 'permission'` and aggregate `usageCount` / `sources`.

5. **savePermissions**
   - Validate all items; rewrite envelope with fresh `updatedAt`.

No TypeScript/TSX generation for this feature.

---

## Studio bridge (IDE)

### `NextjsEngine` (`igrp-studio-ide/src/main/engines/NextjsEngine.ts`)

```ts
getPermissions(basePath: string, options?: { withUsage?: boolean }): Promise<PermissionCatalogItemView[]>
createPermission(data: CreatePermissionConfig, basePath: string): Promise<PermissionCatalogItem>
updatePermission(data: UpdatePermissionConfig, basePath: string): Promise<PermissionCatalogItem>
deletePermission(data: DeletePermissionConfig, basePath: string): Promise<void>
savePermissions(data: PermissionCatalogFile | PermissionCatalogItem[], basePath: string): Promise<PermissionCatalogFile>
```

Wire existing stub `createPermission` to the real engine method. Today it is listed on `BaseEngine` / preload but **has no IPC handler** and NextjsEngine does not implement it.

### Events (`events.ts`)

| Event | Channel |
|-------|---------|
| List | `engine:get-permissions` |
| Create | `engine:create-permission` (already defined) |
| Update | `engine:update-permission` |
| Delete | `engine:delete-permission` |
| Save all | `engine:save-permissions` |

### Preload / `window.engine`

```ts
getPermissions(engineType: string, basePath: string, options?: { withUsage?: boolean }): Promise<HandlerResponse>
createPermission(data: CreatePermissionConfig, engineType: string, basePath: string): Promise<HandlerResponse>
updatePermission(data: UpdatePermissionConfig, engineType: string, basePath: string): Promise<HandlerResponse>
deletePermission(data: DeletePermissionConfig, engineType: string, basePath: string): Promise<HandlerResponse>
savePermissions(data: …, engineType: string, basePath: string): Promise<HandlerResponse>
```

### Renderer (`PermissionCatalogContext`)

Replace mock mutations with:

1. On mount / project open → `getPermissions(…, { withUsage: true })`.
2. Add → `createPermission`.
3. Edit → `updatePermission`.
4. Delete → `deletePermission`.
5. Keep in-memory cache for picker UX; refresh after each write.

---

## Relation to layout rules

`PermissionRuleDefinition` (already supported):

```ts
{
  type: 'permission'
  permission: string[]   // keys from catalog
  mode?: 'all' | 'any'
  action?: 'hide' | 'disable' | 'replace' | 'assert'
  fallback?: Layout
  disabledProp?: string
}
```

Rules are saved **with** page/component JSON via existing `createPage` / `createProcessStep`. Catalog CRUD only manages the key registry in `permissions.json`.

---

## Implementation checklist

### Engine package (`@igrp/igrp-studio-nextjs-engine`)

- [ ] Types: `PermissionCatalogItem`, `PermissionCatalogFile`, create/update/delete configs
- [ ] AJV schemas + validators
- [ ] `loadPermissionCatalog` / `savePermissions`
- [ ] `createPermission` / `updatePermission` / `deletePermission` / `getPermissions`
- [ ] Optional `computePermissionUsage`
- [ ] Constants for file path
- [ ] Unit tests (create unique key, update rename collision, delete missing, empty file)

### Studio IDE

- [ ] Implement `NextjsEngine` methods
- [ ] Register IPC handlers in `api-handler.ts`
- [ ] Extend preload + `interfaces.d.ts`
- [ ] Wire `PermissionCatalogContext` to `window.engine`
- [ ] Drop / keep mock as fallback only when file missing and engine unavailable

### Docs / sync

- [ ] Keep AM mapping (`key`→`code`, `label`→`name`) documented
- [ ] Ignore or allow `permissions.json` in file trees consistently (already in some `IGNORED_PATHS`)

---

## Examples

### Create

```ts
await createPermission(
  {
    type: 'permission',
    key: 'inss.invoice_list.delete',
    label: 'Eliminar fatura',
    description: 'Permite eliminar faturas'
  },
  '/path/to/frontend'
)
```

### Update

```ts
await updatePermission(
  {
    type: 'permission',
    id: 'perm_01HZX…',
    patch: { label: 'Eliminar fatura (admin)' }
  },
  '/path/to/frontend'
)
```

### Delete

```ts
await deletePermission(
  { type: 'permission', key: 'inss.invoice_list.delete' },
  '/path/to/frontend'
)
```

### List

```ts
const items = await getPermissions('/path/to/frontend', { withUsage: true })
```

---

## Status

| Layer | Status |
|-------|--------|
| Studio UI catalog (mock) | Done |
| Layout permission rules | Done (engine types + page save) |
| Engine catalog CRUD | **Not implemented** — this spec |
| IPC `createPermission` | Event/preload stub only |
| AM sync from file | Spec’d elsewhere; not Studio CRUD |
