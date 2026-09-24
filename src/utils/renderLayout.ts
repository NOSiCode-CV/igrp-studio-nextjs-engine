//import prettier from '@prettier/sync';
import { Layout, PermissionRuleDefinition, RuleDefinition } from '../interfaces/types';
import { getComponent } from '../components';
import { renderSyncTemplate } from '../modules/common/renderTemplate';
import { TEMPLATES } from './constants';

export const renderLayout = function (config: Layout, parent?: Layout): string {
  if (!config.componentName) return '';

  let str: string = ""

  const component = getComponent(config.componentName)

  if(!component) return renderSyncTemplate(TEMPLATES.UNREGISTERED_COMPONENT, { name: config.componentName })

  const componentParent = ((parent)? getComponent(parent.componentName) : undefined)

  if(component.maxChildren && config.children) {
    if (config.children.length > component.maxChildren) {
      throw Error(
        `The component ${config.componentName} allows only ${component.maxChildren} children.`,
      );
    }
  }

  // ─── permission rule: "disable" ──────────────────────────────────────
  // Pre-inject a data binding for the disabled prop BEFORE rendering the
  // node itself, so the component template picks it up through its normal
  // data-value pipeline. Composes with any existing disabled binding via
  // `||`, so both must be false for the control to become interactive.
  //
  // We deliberately mutate a SHALLOW-CLONED config rather than the
  // original — the caller's tree stays untouched. This is only needed
  // for `disable`; `hide` / `replace` / `assert` don't touch props.
  const disablePermRules = collectPermissionRules(config, 'disable');
  let renderConfig: Layout = config;
  if (disablePermRules.length > 0) {
    renderConfig = withInjectedDisabledBinding(config, disablePermRules);
  }

  const rendered = component.render(renderConfig, component, parent, componentParent)

  // ─── existing visibility rule ────────────────────────────────────────
  // Kept verbatim: first `condition` on the first visibility rule wraps
  // the node in `{ cond && (…) }`. Composition order below places
  // permission wrappers INSIDE the visibility wrapper so the visibility
  // check short-circuits before any framework hook runs.
  const visibilityRules = (config.rules ?? []).filter(
    (r): r is Extract<RuleDefinition, { type: 'visibility' }> => r.type === 'visibility'
  );
  const visibilityCondition = visibilityRules.length > 0 ? visibilityRules[0].condition : undefined;

  // ─── permission rules: hide / replace ───────────────────────────────
  // "assert" is handled at the root of the page/component/processStep
  // by resolveCodeBlocks — NOT here. `renderLayout` is called for every
  // node in the tree; emitting `await igrpAssertAuthorize(…)` inline
  // would land inside a return statement, which is a syntax error and
  // wouldn't gate anything server-side anyway. See resolveCodeBlocks
  // for the root-level handling; here we simply ignore `assert`.
  const wrapperPermRules = collectPermissionRules(config, 'hide', 'replace');
  let inner = rendered;
  for (const rule of wrapperPermRules) {
    inner = wrapWithAuthorization(rule, inner);
  }

  if (visibilityCondition) {
    str = `{ ${visibilityCondition} && (` + inner + ')}';
  } else {
    str = inner;
  }

  return str

  /*return prettier.format(str, {
    parser: 'angular'
  });*/

}

// ─── helpers ─────────────────────────────────────────────────────────────

/**
 * Filters a node's rules to permission rules with matching `action`s.
 * Preserves array order so composition (outside-in wrapping) is
 * deterministic and mirrors the JSON author's intent.
 */
function collectPermissionRules(
  config: Layout,
  ...actions: Array<PermissionRuleDefinition['action']>
): PermissionRuleDefinition[] {
  if (!config.rules) return [];
  return config.rules.filter((r): r is PermissionRuleDefinition => {
    if (r.type !== 'permission') return false;
    const action = r.action ?? 'hide';
    return actions.includes(action);
  });
}

/**
 * Formats a `permission[]` array as a JSX prop value. Single-entry
 * arrays could be flattened to a bare string prop
 * (`permission="delete_invoice"`), matching the framework doc's
 * examples — the `<IGRPAuthorization>` component accepts both — but
 * keeping the array shape works too and reads more consistently in the
 * generated code, so we always emit the array.
 */
function formatPermissionArray(permissions: string[]): string {
  const entries = permissions.map((p) => `'${escapeSingle(p)}'`).join(', ');
  return `[${entries}]`;
}

function escapeSingle(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

/**
 * Wraps the already-rendered inner JSX in an <IGRPAuthorization> block.
 * For `action: "replace"`, recursively renders the fallback subtree via
 * renderLayout so nested fallback trees (a full component tree, a
 * custom component reference, or a mix) all round-trip through the
 * same pipeline.
 */
function wrapWithAuthorization(rule: PermissionRuleDefinition, innerJsx: string): string {
  const permissionAttr = `permission={${formatPermissionArray(rule.permission)}}`;
  const modeAttr = rule.mode === 'any' ? ' mode="any"' : '';

  const action = rule.action ?? 'hide';
  if (action === 'replace') {
    if (!rule.fallback) {
      // Silent-fail-closed feels wrong for a codegen bug. Emit a
      // visible placeholder so the author notices during preview.
      return `<IGRPAuthorization ${permissionAttr}${modeAttr} fallback={null}>${innerJsx}</IGRPAuthorization>`;
    }
    const fallbackJsx = renderLayout(rule.fallback, undefined);
    return `<IGRPAuthorization ${permissionAttr}${modeAttr} fallback={${fallbackJsx}}>${innerJsx}</IGRPAuthorization>`;
  }

  // hide — no fallback
  return `<IGRPAuthorization ${permissionAttr}${modeAttr}>${innerJsx}</IGRPAuthorization>`;
}

/**
 * Returns a shallow-cloned Layout with `data[<disabledProp>]` set to a
 * value binding that resolves to `!can(permission)` (composed with `||`
 * when several disable-rules coexist on the same node).
 *
 * We insert the binding into `data` (not `properties`) because the
 * engine's default rendering pipeline treats `data.<prop>.value.code`
 * as a raw code expression — which is exactly what we need: an
 * expression that references `can(...)` at runtime rather than a
 * literal string.
 *
 * If the node already has a `data[<disabledProp>]` binding, we
 * OR-compose so both must be false for the control to become
 * interactive. The existing binding wins for the fallback shape (state
 * vs. value.code); we only touch `value.code`.
 */
function withInjectedDisabledBinding(
  config: Layout,
  disableRules: PermissionRuleDefinition[],
): Layout {
  const cloned: Layout = { ...config, data: { ...(config.data ?? {}) } };

  for (const rule of disableRules) {
    const propName = rule.disabledProp && rule.disabledProp.trim() !== ''
      ? rule.disabledProp
      : 'disabled';

    const denyExpr = buildDenyExpression(rule);
    const existing = (cloned.data as any)[propName];

    if (!existing) {
      (cloned.data as any)[propName] = {
        value: { id: '', code: denyExpr, type: 'boolean' },
      };
      continue;
    }

    // Compose with any existing value.code binding — most nodes won't
    // have this; the ones that do get an OR so either condition
    // disables the control.
    const existingCode: string | undefined =
      existing?.value?.code && typeof existing.value.code === 'string'
        ? existing.value.code
        : undefined;

    if (existingCode) {
      (cloned.data as any)[propName] = {
        ...existing,
        value: { ...existing.value, code: `(${denyExpr}) || (${existingCode})`, type: 'boolean' },
      };
    } else {
      // existing state binding — leave it alone; add ours alongside as
      // a separate key won't help because the component reads one prop.
      // Wrap with a fresh code binding that OR-composes with the state.
      const existingStateName: string | undefined = existing?.state?.name;
      if (existingStateName) {
        (cloned.data as any)[propName] = {
          value: {
            id: '',
            code: `(${denyExpr}) || (${existingStateName})`,
            type: 'boolean',
          },
        };
      } else {
        (cloned.data as any)[propName] = {
          value: { id: '', code: denyExpr, type: 'boolean' },
        };
      }
    }
  }

  return cloned;
}

/**
 * Builds the runtime deny expression for a `disable` permission rule.
 * The rule requires either every listed permission (mode "all") or at
 * least one (mode "any"). We flip the sign here because `disabled` is
 * `true` when the user LACKS the permission.
 *
 *   mode "all"  → disabled when at least one is missing:
 *                 `!(can('a') && can('b'))`
 *                 which is equivalent to `!can('a') || !can('b')`
 *   mode "any"  → disabled when all are missing:
 *                 `!(can('a') || can('b'))`
 *                 which is equivalent to `!can('a') && !can('b')`
 */
function buildDenyExpression(rule: PermissionRuleDefinition): string {
  const perms = rule.permission ?? [];
  if (perms.length === 0) return 'false';
  if (perms.length === 1) return `!can('${escapeSingle(perms[0])}')`;

  const canCalls = perms.map((p) => `can('${escapeSingle(p)}')`);
  if (rule.mode === 'any') {
    return `!(${canCalls.join(' || ')})`;
  }
  return `!(${canCalls.join(' && ')})`;
}
