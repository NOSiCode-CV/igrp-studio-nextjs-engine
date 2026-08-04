import { Component } from '../components';
import {
  Arguments,
  ElementField,
  FieldValidationMetadata,
  Layout,
  Segment,
  StyleDefinition,
} from '../interfaces/types';
import { TABLE_COLUMNS } from '../components/table/children/tableColumns';
import { TABLE_FILTERS } from '../components/table/children/tableFilters';
import { CARD_CONTENT } from '../components/card/children/cardContent';
import { CARD_FOOTER } from '../components/card/children/cardFooter';
import { capitalize, toCamelCase } from './stringHelpers';
import { renderCode } from '../utils/renderCode';
import { layoutStyleToClasses } from './layoutStyleToClasses';
import { spacingToClasses } from './spacingToClasses';
import { sizeToClasses } from './sizeToClasses';
import { replaceTemplate } from '../utils/helpers';
import { typographyStyleToClasses } from './typographyStyleToClasses';
import { bordersStyleToClasses } from './bordersStyleToClasses';
import { positionStyleToClasses } from './positionStyleToClasses';
import { backgroundsStyleToClasses } from './backgroundsStyleToClasses';
import { parseRoutePath } from './routerParser';
import { TABS_ITEM } from '../components/tabs/children/tabsItem/index';
import { MENU_NAVIGATION_ITEM } from '../components/menuNavigation/children/menuNavigationItem/index';
import { TEXT_LIST_ITEM } from '../components/textList/children/textListItem/index';
import { TEXT_LIST_SUBITEMS } from '../components/textList/children/textListSubItems/index';
import { TEXT_LIST_ITEM_CONTENT } from '../components/textList/children/textListItemContent/index';
import { INFO_ITEM } from '../components/infoCard/children/infoItem/index';
import { INFO_SECTION } from '../components/infoCard/children/infoSection/index';
import { CARD_DETAILS_ITEM } from '../components/cardDetails/children/cardDetailsItem/index';
import { ACCORDION_ITEM } from '../components/accordion/children/accordionItem/index';
import { TABLE_ROW_SUBCOMPONENT } from '../components/table/children/tableRowSubcomponent';

export function addClassNameFromChildProperties(
  parent: Layout | undefined,
  registry: Record<string, Component>,
): string {
  if (!parent) return '';
  // Defensive: the filter wrapper drops empty/null/undefined inputs and
  // shifts named args left, so when this filter is invoked as
  //   parentResourceConfig | addClassNameFromChildProperties: registry
  // and `parentResourceConfig` is undefined (e.g. components rendered via
  // renderTableRow which calls renderLayout without a parent), the function
  // is actually called as `addClassNameFromChildProperties(registry)` —
  // `parent` is the whole registry object and `registry` is undefined. A
  // real parent Layout always has a `componentName` string, so detect the
  // misroute and bail out cleanly instead of crashing with
  //   "Cannot read properties of undefined (reading 'undefined')"
  // at `registry[parent.componentName]`.
  if (!registry || typeof (parent as any).componentName !== 'string') return '';
  const parentElement = registry[parent.componentName];
  const sourcePropertiesCandidates = [
    parent.childProperties,
    (parent as Record<string, any>)?.properties?.childProperties,
    parentElement?.childProperties,
  ].filter((candidate) => candidate && Object.keys(candidate).length > 0);
  const sourceProperties = sourcePropertiesCandidates[0] as Record<string, any> | undefined;
  if (!sourceProperties) return '';

  return Object.entries(sourceProperties)
    .map(([key, value]) => {
      let normalizedValue = value;
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        const valueAsObject = value as Record<string, any>;
        if (valueAsObject.default !== undefined) normalizedValue = valueAsObject.default;
        else if (valueAsObject.value?.code !== undefined) normalizedValue = valueAsObject.value.code;
        else if (valueAsObject.state?.name !== undefined) normalizedValue = valueAsObject.state.name;
        else if (valueAsObject.value !== undefined) normalizedValue = valueAsObject.value;
      }
      if (typeof normalizedValue !== 'string' && typeof normalizedValue !== 'number' && typeof normalizedValue !== 'boolean') {
        return '';
      }
      if (normalizedValue === undefined || normalizedValue === null || normalizedValue === '') return '';
      return parentElement?.childPropertiesMapping?.[key]?.className !== undefined
        ? `'${parentElement.childPropertiesMapping?.[key]?.className ?? key}${normalizedValue}',`
        : ``;
    })
    .join('');
}

export function addClassNameFromProperties(
  component: Layout,
  registry: Record<string, Component>,
): string {
  if (!component.properties) return '';

  const componentElement = registry[component.componentName];

  return Object.entries(component.properties)
    .map(([key, value]) => {
      return componentElement?.propertiesMapping?.[key]?.className !== undefined
        ? `'${componentElement.propertiesMapping?.[key]?.className ?? key}${value}',`
        : ``;
    })
    .join('');
}

export function addClassNameFromStyle(style: StyleDefinition) {
  const classes: string[] = [];

  let { layout, spacing, size, typography, borders, position, backgrounds } = style ?? {};

  if (layout) {
    classes.push(`'${layoutStyleToClasses(layout)}',`);
  }

  if (spacing) {
    classes.push(`'${spacingToClasses(spacing)}',`);
  }

  if (size) {
    classes.push(`'${sizeToClasses(size)}',`);
  }

  if (typography) {
    classes.push(`'${typographyStyleToClasses(typography)}',`);
  }

  if (borders) {
    classes.push(`'${bordersStyleToClasses(borders)}',`);
  }

  if (position) {
    classes.push(`'${positionStyleToClasses(position)}',`);
  }

  if (backgrounds) {
    classes.push(`'${backgroundsStyleToClasses(backgrounds)}',`);
  }

  return classes.join('');
}

export function resolveFirstType(data: any[]): string {
  return !data || Object.entries(data).length == 0 ? 'any' : `${data[0].type}`;
}

/**
 * Converts an array of Segment objects into a URL query string.
 * If the segment has a tag, uses it as a dynamic replacement (with `row.original.` prefix for column context).
 * Otherwise, uses the value if available.
 *
 * Example output:
 * ?userId=${row.original.user_id}&status=active
 */
export function resolveQueryParams(params: Segment[]): string {
  if (!params || params.length === 0) return '';

  const query = params
    .filter((seg) => seg.value !== undefined || seg.tag !== undefined)
    .map((seg) => {
      // Build the replacement value
      const replacement = seg.tag
        ? `\${${seg.context === 'column' ? 'row.original.' : ''}${seg.tag}}`
        : seg.value ?? '';

      return `${seg.name}=${replacement}`;
    })
    .join('&');

  return query ? `?${query}` : '';
}

export function resolveSegmentPath(path: string, segments?: Segment[]) {
  let finalPath = path.startsWith('/') ? path.slice(1) : path;

  // Remove route groups like (group) from the path
  finalPath = finalPath
    .split('/')
    .filter((p) => !(p.startsWith('(') && p.endsWith(')')))
    .join('/');

  if (!segments)
    return (
      (!(finalPath.includes('http://') || finalPath.includes('https://')) ? '/' : '') + finalPath
    );

  const segmentsScan = parseRoutePath(finalPath);

  // Group segments by name
  const grouped = segments.reduce<Record<string, Segment[]>>((acc, seg) => {
    if (!acc[seg.name]) acc[seg.name] = [];
    acc[seg.name].push(seg);
    return acc;
  }, {});

  // Resolve all placeholders in the cleaned path
  Object.entries(grouped).forEach(([name, group]) => {
    const type = segmentsScan.find((s) => s.originalSegment === name)?.type ?? 'dynamic';

    let replacement: string;

    if (type === 'catch-all' || type === 'optional-catch-all') {
      const parts = group.map((g) => (g.tag ? `\${row?.original.${g.tag}}` : (g.value ?? '')));
      replacement = parts.join('/');
    } else {
      const g = group[0];
      replacement = g.tag ? `\${${ g.context === 'column' ?  'row.original.' : '' }${g.tag}}` : (g.value ?? '');
    }

    finalPath = finalPath.replace(name, replacement);
  });

  return (
    (!(finalPath.includes('http://') || finalPath.includes('https://')) ? '/' : '') + finalPath
  );
}

/**
 * Resolves a default state value from a string representation.
 *
 * - Wraps plain strings with double quotes.
 * - Returns arrays, objects, booleans, numbers, and `null` as-is.
 * - Recursively builds defaults for nested object fields.
 *
 * @param {string} defaultValue - The string representing the default value.
 * @param {string} type - The string representing the type.
 * @param {boolean} isList - The boolean representing the list type.
 * @param {ElementField[]} fields - The nested fields if the type is object.
 * @returns {string} A string suitable for inclusion as a default state value in code.
 */
export function resolveStateDefault(
  defaultValue?: string,
  type?: string,
  isList?: boolean,
  fields?: ElementField[],
): string {

  const trimmed = defaultValue?.trim() ?? '';
  const isReservedLiteral = (
    trimmed === 'null' ||
    trimmed === 'undefined' ||
    trimmed === 'true' ||
    trimmed === 'false' ||
    trimmed === '[]' ||
    trimmed === '{}' ||
    (!isNaN(Number(trimmed)) && trimmed !== '') ||
    (trimmed.startsWith('[') && trimmed.endsWith(']')) ||
    (trimmed.startsWith('{') && trimmed.endsWith('}'))
  );

  // Schema-driven Date handling. The previous logic auto-wrapped any value
  // matching an ISO-date shape in `new Date(...)`, which false-positived on
  // string-typed props whose text just happened to look like a date
  // (e.g. a `label` reading "2026-01-10"). Now we wrap iff the caller told
  // us the schema type is `date` — regardless of value shape. Empty
  // date defaults become `undefined` rather than `new Date("")` (which
  // would produce Invalid Date at runtime).
  if (type === 'date') {
    if (trimmed === '') return 'undefined';
    return `new Date(\`${trimmed}\`)`;
  }

  // String: always emit as a template literal (unless empty/undefined or a
  // reserved literal like `null`/`true`/etc). We no longer fall through to
  // Date-wrap when the string happens to look like an ISO date — that was
  // the regression source; string props must render as strings.
  if (type === 'string') {
    if (defaultValue === undefined) return 'undefined';
    if (isReservedLiteral) return trimmed;
    return `\`${defaultValue.replace(/"/g, '\\"')}\``;
  }

  // Empty values for non-string/object types
  if (trimmed === '' && !['string', 'object'].includes(type ?? '')) return 'undefined';

  // Handle booleans, numbers, arrays, objects as string literals
  if (
    type !== 'string' &&
    isReservedLiteral
  ) {
    return trimmed;
  }

  // Handle object with nested fields
  if (type === 'object') {
    if (fields && fields.length > 0) {
      const objectBody = fields
        .map((f) => {
          const value = resolveStateDefault(f.defaultValue, f.type, f.isList, f.fields);
          return `${f.name}: ${value}`;
        })
        .join(', ');
      const result = `{ ${objectBody} }`;
      return isList === true ? `[${result}]` : result;
    } else {
      return isList === true ? `[${trimmed}]` : trimmed;
    }
  }

  // Handle lists
  if (isList === true) {
    return trimmed !== '' ? trimmed : '[]';
  }

  // Fallback for strings
  return type === 'string' ? `\`${trimmed.replace(/"/g, '\\"')}\`` : trimmed;
}

export function resolveZodTypes(field?: ElementField): string {
  if (!field) return 'z.unknown()';

  const { type, isList, required, validation, fields, nullable } = field;
  const lowerType = type.toLowerCase();

  const getError = (key: string): string => {
    const msg = validation?.errors?.find(
      (e: FieldValidationMetadata) => e.validationKey === key,
    )?.message;
    return msg ? `, { error: "${msg}" }` : '';
  };

  const isPrimitive = ['string', 'number', 'boolean', 'date', 'any', 'unknown'].includes(lowerType);

  let zodType: string;

  if (lowerType === 'object' && fields?.length) {
    const inner = fields.map((f) => `${f.name}: ${resolveZodTypes(f)}`).join(', ');
    zodType = `z.object({ ${inner} })`;
  } else if (isPrimitive) {
    const primitiveMap: Record<string, string> = {
      string: 'z.string()',
      number: 'z.coerce.number()',
      boolean: 'z.coerce.boolean()',
      date: 'z.coerce.date()',
      any: 'z.any()',
      unknown: 'z.unknown()',
    };
    zodType = primitiveMap[lowerType] ?? 'z.unknown()';
  } else {
    zodType = `z.${toCamelCase(type)}()`;
  }

  if (validation) {
    const v: string[] = [];

    if (lowerType === 'string') {
      if (validation.minLength !== undefined)
        v.push(`.min(${validation.minLength}${getError('minLength')})`);

      if (validation.maxLength !== undefined)
        v.push(`.max(${validation.maxLength}${getError('maxLength')})`);

      if (validation.regex) v.push(`.regex(${validation.regex}${getError('regex')})`);

      if (validation.email) v.push(`.email(${getError('email').replace(/^, /, '')})`);

      if (validation.url) v.push(`.url(${getError('url').replace(/^, /, '')})`);

      if (validation.uuid) v.push(`.uuid(${getError('uuid').replace(/^, /, '')})`);

      if (validation.startsWith)
        v.push(`.startsWith(${JSON.stringify(validation.startsWith)}${getError('startsWith')})`);

      if (validation.endsWith)
        v.push(`.endsWith(${JSON.stringify(validation.endsWith)}${getError('endsWith')})`);

      if (validation.includes)
        v.push(`.includes(${JSON.stringify(validation.includes)}${getError('includes')})`);
    }

    if (lowerType === 'number') {
      if (validation.min !== undefined) v.push(`.min(${validation.min}${getError('min')})`);

      if (validation.max !== undefined) v.push(`.max(${validation.max}${getError('max')})`);

      if (validation.gt !== undefined) v.push(`.gt(${validation.gt}${getError('gt')})`);

      if (validation.gte !== undefined) v.push(`.gte(${validation.gte}${getError('gte')})`);

      if (validation.lt !== undefined) v.push(`.lt(${validation.lt}${getError('lt')})`);

      if (validation.lte !== undefined) v.push(`.lte(${validation.lte}${getError('lte')})`);

      if (validation.positive) v.push(`.positive(${getError('positive').replace(/^, /, '')})`);

      if (validation.negative) v.push(`.negative(${getError('negative').replace(/^, /, '')})`);

      if (validation.int) v.push(`.int(${getError('int').replace(/^, /, '')})`);

      if (validation.finite) v.push(`.finite(${getError('finite').replace(/^, /, '')})`);
    }

    if (lowerType === 'date') {
      if (validation.minDate)
        v.push(
          `.refine(d => d >= new Date(${JSON.stringify(validation.minDate)}), { error: "${getError('minDate')?.replace(/^, \{ error: "|"}$/, '') || `Date must be after ${validation.minDate}`}" })`,
        );

      if (validation.maxDate)
        v.push(
          `.refine(d => d <= new Date(${JSON.stringify(validation.maxDate)}), { error: "${getError('maxDate')?.replace(/^, \{ error: "|"}$/, '') || `Date must be before ${validation.maxDate}`}" })`,
        );
    }

    zodType += v.join('');
  }

  if (isList) {
    zodType = `z.array(${zodType})`;
  }

  if (lowerType === 'string' && required) {
    zodType += `.nonempty(${getError('required').replace(/^, /, '')})`;
  }

  if (!required) {
    zodType += '.optional()';
  }

  if (nullable === true) {
    zodType += '.nullable()';
  }

  return zodType;
}

export function resolveFunctionArgs(args: Arguments[]): string {
  return args
    .map((arg) => {
      const name = arg.isState ? `set${capitalize(arg.name)}` : arg.name;
      const optional = arg.isOptional ? '?' : '';
      const type = resolveType(arg);
      return `${name}${optional}: ${type}`;
    })
    .join(', ');
}

export function resolveArgNames(args: Arguments[]): string {
  if (!args?.length) return '';
  return args
    .map((arg) => arg?.name)
    .filter((name): name is string => typeof name === 'string' && name.trim() !== '')
    .join(', ');
}

function resolveType(arg: Arguments): string {
  if (arg.isFunction) {
    const params = arg.functionParameters ? resolveFunctionArgs(arg.functionParameters) : '';
    return `(${params}) => ${arg.type}${arg.isList ? '[]' : ''}`;
  }
  if (arg.isState) {
    return `(${arg.name}: ${arg.type}${arg.isList ? '[]' : ''}) => void`;
  }

  return `${arg.type}${arg.isList ? '[]' : ''}`;
}

export function resolveArrayElementRules(config: Layout): string {
  const visibilityRules = config.rules?.filter((it) => it.type === 'visibility') ?? [];
  const condition = visibilityRules
    .map((it) => it.condition)
    .find((it) => typeof it === 'string' ? it.trim() !== '' && it.trim() !== 'undefined' : it !== undefined && it !== null);
  if (!condition) return '';
  return `...(${condition} ? [`;
}

export function checkRules(config: Layout): boolean {
  const visibilityRules = config.rules?.filter((it) => it.type === 'visibility') ?? [];
  const condition = visibilityRules
    .map((it) => it.condition)
    .find((it) => typeof it === 'string' ? it.trim() !== '' && it.trim() !== 'undefined' : it !== undefined && it !== null);
  return Boolean(condition);
}

/**
 * Root-level assert helpers — added in `0.2.0-beta.23`.
 *
 * A permission rule with `action: "assert"` on the ROOT layout of a
 * page / component / processStep is emitted as either:
 *   - a server-side `await igrpAssertAuthorize(...)` prelude at the top
 *     of the exported function body (when the file is a server
 *     component — `useClient === false`), which routes denies through
 *     Next's `forbidden()` for a real 403; or
 *   - a client-side `<IGRPGuardPage permission={...}>` wrapper around
 *     the entire returned JSX (the default, since pages default to
 *     `'use client'`), a cosmetic guard that unmounts the tree on deny.
 *
 * Non-root `assert` rules are silently downgraded to `hide` — the
 * downgrade lives in `renderLayout`, which just skips `assert` when
 * composing per-node wrappers. That leaves the root the only place any
 * `assert` rule actually takes effect.
 *
 * The four helpers below are used by page.liquid / component.liquid to
 * decorate the emitted function. Each returns `''` (empty string) when
 * no assert rule is present, so the templates can inline-call them
 * without conditionals.
 */

function collectRootAssertRules(config: Layout | undefined): Array<{
  permission: string[];
  mode?: 'all' | 'any';
}> {
  if (!config || !config.rules) return [];
  const rules: Array<{ permission: string[]; mode?: 'all' | 'any' }> = [];
  for (const rule of config.rules) {
    if (rule.type !== 'permission') continue;
    const action = (rule as any).action ?? 'hide';
    if (action !== 'assert') continue;
    rules.push({
      permission: (rule as any).permission ?? [],
      mode: (rule as any).mode,
    });
  }
  return rules;
}

function formatPermissionArrayInline(permissions: string[]): string {
  const escaped = permissions.map((p) => `'${p.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`);
  return `[${escaped.join(', ')}]`;
}

/**
 * Emits the `async` keyword modifier when the root has an assert rule
 * AND the file is a server component. Server components with an assert
 * MUST be `async` — `igrpAssertAuthorize` is an async function.
 * Client components (default for pages) stay as regular functions and
 * use the guard wrapper instead — no async needed.
 */
export function resolvePermissionAsyncModifier(root: Layout, useClient?: boolean): string {
  if (useClient !== false) return ''; // client → no async, wrapper handles it
  const rules = collectRootAssertRules(root);
  return rules.length > 0 ? 'async ' : '';
}

/**
 * Emits one `await igrpAssertAuthorize(...)` call per root assert rule,
 * one per line. Empty when the file is a client component (default for
 * pages — the wrapper handles it) or when no assert rules are present.
 */
export function resolvePermissionAssertPrelude(root: Layout, useClient?: boolean): string {
  if (useClient !== false) return '';
  const rules = collectRootAssertRules(root);
  if (rules.length === 0) return '';
  return rules
    .map((rule) => {
      const permArg = formatPermissionArrayInline(rule.permission);
      const modeArg = rule.mode === 'any' ? `, { mode: 'any' }` : '';
      return `  await igrpAssertAuthorize(${permArg}${modeArg});`;
    })
    .join('\n');
}

/**
 * Emits the opening `<IGRPGuardPage permission={...}>` tag(s) for
 * client-mode assert guards. Multiple assert rules stack as nested
 * IGRPGuardPage elements — outer to inner in rule order.
 */
export function resolvePermissionGuardWrapperOpen(root: Layout, useClient?: boolean): string {
  if (useClient === false) return ''; // server → prelude handles it
  const rules = collectRootAssertRules(root);
  if (rules.length === 0) return '';
  return rules
    .map((rule) => {
      const permAttr = `permission={${formatPermissionArrayInline(rule.permission)}}`;
      const modeAttr = rule.mode === 'any' ? ' mode="any"' : '';
      return `<IGRPGuardPage ${permAttr}${modeAttr}>`;
    })
    .join('');
}

/**
 * Companion closer for `resolvePermissionGuardWrapperOpen`. Emits
 * exactly the same number of closing tags in reverse.
 */
export function resolvePermissionGuardWrapperClose(root: Layout, useClient?: boolean): string {
  if (useClient === false) return '';
  const rules = collectRootAssertRules(root);
  if (rules.length === 0) return '';
  return rules.map(() => '</IGRPGuardPage>').join('');
}

export function extractTableColumns(children: Layout[]) {
  return children.filter((it) => it.componentName === TABLE_COLUMNS);
}

export function extractTableRowSubcomponent(children: Layout[]) {
  return children.find((it) => it.componentName === TABLE_ROW_SUBCOMPONENT);
}

export function extractTableFilters(children: Layout[]) {
  return children.filter((it) => it.componentName === TABLE_FILTERS);
}

export function extractCardContent(children: Layout[]) {
  return children.filter((it) => it.componentName === CARD_CONTENT);
}

export function extractCardFooter(children: Layout[]) {
  return children.filter((it) => it.componentName === CARD_FOOTER);
}

export function extractTabsItem(children: Layout[]) {
  return children.filter((it) => it.componentName === TABS_ITEM);
}

export function extractMenuNavigationItems(children: Layout[]) {
  return children.filter((it) => it.componentName === MENU_NAVIGATION_ITEM);
}

export function extractTextListItems(children: Layout[]) {
  return children.filter((it) => it.componentName === TEXT_LIST_ITEM);
}

export function extractTextListItemSubItems(children: Layout[]) {
  return children.filter((it) => it.componentName === TEXT_LIST_SUBITEMS);
}

export function extractTextListItemContent(children: Layout[]) {
  return children.filter((it) => it.componentName === TEXT_LIST_ITEM_CONTENT);
}

export function extractInfoSection(children: Layout[]) {
  return children.filter((it) => it.componentName === INFO_SECTION);
}

export function extractInfoItem(children: Layout[]) {
  return children.filter((it) => it.componentName === INFO_ITEM);
}

export function extractCardDetailsItem(children: Layout[]) {
  return children.filter((it) => it.componentName === CARD_DETAILS_ITEM);
}

export function extractAccordionItem(children: Layout[]) {
  return children.filter((it) => it.componentName === ACCORDION_ITEM);
}

export function resolveComponent(
  componentName: string,
  registry: Record<string, Component>,
  type?: string,
): string {
  if (!type) return registry[componentName]?.componentClass ?? 'any';

  if (type === 'button') {
    return registry[componentName.replace('Action', 'Button')]?.componentClass ?? 'any';
  } else {
    return registry[componentName]?.componentClass ?? 'any';
  }
}

/**
 * Recursively modifies the `tag` property of a layout and its children
 * using the format: `${tag}.${index}.${layout.tag}`.
 *
 * @param layout The layout object to transform.
 * @param tag The base tag prefix to use.
 * @returns A new layout with updated tags.
 */
export function indexedTag(layout: Layout, tag: string): Layout {
  const applyTag = (node: Layout): Layout => {
    if (node.tag.includes(`\${index}`)) return node;
    return {
      ...node,
      tag: `${tag}.\${index}.${node.tag}`,
      children: node.children?.map((child) => applyTag(child)),
    };
  };

  return applyTag(layout);
}

export function replaceId(name: string, component?: any) {
  if (!component || !name) return name;

  const tag = component.tag;
  const finalTag = tag.includes('${index}')
    ? tag.substring(tag.lastIndexOf('.') + 1)
    : tag;

  return replaceTemplate(name, { id: finalTag });
}

export function replaceType(type: string, component?: any, isArray?: boolean) {
  if(!component || !type) return normalizeAnyType(isArray? `Array<${type}>` : type);
  const finalType = component.dataType ? capitalize(component.dataType) : 'any'
  return normalizeAnyType(replaceTemplate(type, { type: isArray? `Array<${finalType}>` : finalType }));
}

export function replaceValue(value: string, component?: any) {
  if(!component || !value) return value;
  return replaceTemplate(value, { value: component.properties?.value ?? '', type: component.dataType ? capitalize(component.dataType) : 'any' })
}

export function resolveClassNameProperty(component: Layout, registry: Record<string, Component>) {
  const element = registry[component.componentName];
  if(!element) return 'className'
  return element.classNamePropertyTag ?? 'className'
}

/**
 * Serializes a plain object of scalar values into a JS/JSX object-literal
 * expression like `{ key1: 'val1', key2: 42, key3: true }`. Used by
 * templates that emit a whole object as a single JSX prop — e.g.
 * `dateOptions={{ … }}` on IGRPDataTableCellDate. Booleans and numbers
 * stay literal; strings are backtick-quoted so template-literal escapes
 * don't clash with `${…}` interpolation elsewhere in the emitted TSX.
 * Undefined/null/empty-string entries are dropped so an author who left
 * a form field blank doesn't emit `year: ''`.
 *
 * Returns an empty string when the input has no usable entries — the
 * caller's `{% if … -%}` guard then skips emitting the whole prop.
 */
export function renderJSXObjectLiteral(obj: Record<string, any> | undefined): string {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return '';
  const entries = Object.entries(obj)
    .filter(([, v]) => v !== undefined && v !== null && v !== '')
    .map(([k, v]) => {
      if (typeof v === 'boolean' || typeof v === 'number') return `${k}: ${v}`;
      const s = String(v).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
      return `${k}: \`${s}\``;
    });
  if (entries.length === 0) return '';
  return `{ ${entries.join(', ')} }`;
}

/**
 * Liquid-side accessor for a component's declared property schema
 * (`registry[componentName].properties`). Used by `default.liquid` to hand
 * the schema to `render-properties`, which then routes each prop through
 * `resolveStateDefault` with the schema-declared type (e.g. `'date'`)
 * instead of the value's runtime `typeof` — the disambiguation that
 * prevents a string label reading "2026-01-10" from being wrapped as
 * `new Date(...)`.
 */
export function resolvePropertiesSchema(
  componentName: string | Layout,
  registry: Record<string, Component>,
): Record<string, any> | undefined {
  const name = typeof componentName === 'string' ? componentName : componentName?.componentName;
  if (!name || !registry) return undefined;
  return registry[name]?.properties;
}

export function renderProperties(
  customProperties: Record<string, any>,
  dataProperties?: Record<string, any>,
  classKey?: string, isJson?: boolean,
  /**
   * Optional per-key schema (typically `registry[componentName].properties`)
   * used to disambiguate wrap behavior. When available we consult
   * `propertiesSchema[key].type` (and nested `properties[k].type` for the
   * `iconProperties`/`commonProperties` groups) to pick the type argument
   * for `resolveStateDefault` — so a prop declared `type: 'date'` wraps as
   * `new Date(...)` regardless of value shape, and a prop declared
   * `type: 'string'` stays a template literal even when its value happens
   * to look like an ISO date. Falls back to `typeof value` when the schema
   * is absent (customProperties consumers, direct callers).
   */
  propertiesSchema?: Record<string, any>,
) {
  // Pick the effective type for a given (schemaEntry, value) pair. Prefer
  // schema type when known; otherwise runtime type. Empty/nullish values
  // fall through to `undefined` so resolveStateDefault emits `'undefined'`.
  const pickType = (schemaEntry: any, v: any): string | undefined => {
    if (schemaEntry?.type) return schemaEntry.type as string;
    return v !== undefined && v !== null ? typeof v : undefined;
  };

  return customProperties
    ? Object.entries(customProperties)
        .map(([key, value]) => {
          if (
            [
              'content',
              'dataProperties',
              'name',
              'customProperties',
              'generateReference',
              classKey
            ].includes(key)
          )
            return;
          if (dataProperties && dataProperties[key]) return '';
          if (
            value &&
            typeof value === 'object' &&
            !Array.isArray(value) &&
            ['iconProperties', 'commonProperties'].includes(key)
          ) {
            const nestedSchema = propertiesSchema?.[key]?.properties;
            return Object.entries(value)
              .map(([k, v]) => {
                if (k === 'customProperties' || k === 'generateReference') return '';
                const effectiveType = pickType(nestedSchema?.[k], v);
                const rendered = resolveStateDefault(
                  `${typeof v === 'object' ? JSON.stringify(v) : v}`,
                  effectiveType,
                  Array.isArray(v),
                );
                return isJson === true ? `${k}: ${rendered}` : `${k}={ ${rendered} }`;
              })
              .join('\n');
          } else {
            const effectiveType = pickType(propertiesSchema?.[key], value);
            const rendered = resolveStateDefault(
              `${typeof value === 'object' ? JSON.stringify(value) : value}`,
              effectiveType,
              Array.isArray(value),
            );
            return isJson === true ? `${key}: ${rendered}` : `${key}={ ${rendered} }`;
          }
        })
        .filter((it) => it !== undefined && it !== '')
        .join(isJson === true? ',\n' : '\n')
    : ``;
}

export function renderInteractions(interactions: Record<string, any>, isJson?: boolean) {
  return interactions
    ? Object.entries(interactions)
        .map(([key, value]) => {
          if (value.function && value.type === 'function') {
            if (!(value.function.fnName || value.function.fnCustomSet || value.function.state))
              return;
            return isJson === true
              ? `${key}: ${value.function.fnName ?? value.function.fnCustomSet ?? value.function.state?.name},`
              : `${key}={ ${value.function.fnName ?? value.function.fnCustomSet ?? value.function.state?.name} }`;
          }
          if (value.action && value.type === 'action') {
            if (!(value.action.actionName || value.action.actionCustomSet || value.action.state))
              return;
            return isJson === true
              ? `${key}: ${value.action.actionName ?? value.action.actionCustomSet ?? value.action.state?.name},`
              : `${key}={ ${value.action.actionName ?? value.action.actionCustomSet ?? value.action.state?.name} }`;
          }
          if (value.formSubmit && value.type === 'formSubmit') {
            if (!value.formSubmit.targetForm) return;
            // renderCode() runs Prettier on the snippet, which appends a
            // trailing semicolon and newline (e.g. `form1Ref.current?.submit();\n`).
            // We splice the result into the body of an arrow function
            // expression, so the trailing `;` + newline break the JSX:
            //   onClick={ () => form1Ref.current?.submit();
            //   }
            // Trim whitespace and a single trailing semicolon so the
            // expression slots in cleanly as a single-statement lambda body.
            const formCode = renderCode({
              id: '',
              name: `formReferenceUsage`,
              properties: {
                formTag: value.formSubmit.targetForm,
              },
            })
              .trim()
              .replace(/;$/, '');
            return isJson === true
              ? `${key}: () => ${formCode},`
              : `${key}={ () => ${formCode} }`;
          }
          if (value.navigate && value.type === 'navigate') {
            if (!value.navigate.path) return;
            return isJson === true
              ? `${key}: () => ${value.navigate.name}(${value.navigate.inRow ? 'row' : ''}),`
              : `${key}={ () => ${value.navigate.name}(${value.navigate.inRow ? 'row' : ''}) }`;
          }
        })
        .join('\n')
    : ``;
}

export function renderData(data: Record<string, any>, component?: Layout, skipKeys?: string) {
  // `content` has always been skipped because the surrounding templates
  // render it separately (as text children, not as a prop). `skipKeys`
  // (comma-separated) lets a specific template exclude additional keys —
  // used by table cells where a "primary" data key (e.g. `value`) is
  // consumed elsewhere and shouldn't also be emitted as a JSX prop.
  const skip = new Set<string>(['content']);
  if (skipKeys) {
    skipKeys.split(',').map((s) => s.trim()).filter(Boolean).forEach((k) => skip.add(k));
  }
  return data
    ? Object.entries(data)
        .map(([key, value]) => {
          if(skip.has(key)) return ''
          return `${key}={ ${replaceId(value.state?.name, component) ?? value.value?.code ?? 'undefined'} }`;
        })
        .filter((s) => s !== '')
        .join('\n')
    : ``;
}

function normalizeAnyType(t: string) {

  if(t === undefined) return undefined;

  if(t.includes('anyZodType'))
    return t.replace('anyZodType', 'any')

  return t;

}
