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
      return parentElement?.childPropertiesMapping[key]?.className !== undefined
        ? `'${parentElement.childPropertiesMapping[key]?.className ?? key}${normalizedValue}',`
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
      return componentElement?.propertiesMapping[key]?.className !== undefined
        ? `'${componentElement.propertiesMapping[key]?.className ?? key}${value}',`
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

  // Helper to check ISO date format
  const isISODate = (val: string) => {
    const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/;
    return isoRegex.test(val);
  };

  if (type === 'string') {
    if (defaultValue === undefined) return 'undefined';
    if(!isISODate(defaultValue.trim())) {
      return `\`${defaultValue.replace(/"/g, '\\"')}\``;
    }
  }

  const trimmed = defaultValue?.trim() ?? '';

  // Empty values for non-string/object types
  if (trimmed === '' && !['string', 'object'].includes(type ?? '')) return 'undefined';

  // Handle booleans, numbers, arrays, objects as string literals
  if (
    type !== 'string' &&
    (trimmed === 'null' ||
      trimmed === 'undefined' ||
      trimmed === 'true' ||
      trimmed === 'false' ||
      trimmed === '[]' ||
      trimmed === '{}' ||
      (!isNaN(Number(trimmed)) && trimmed !== '') ||
      (trimmed.startsWith('[') && trimmed.endsWith(']')) ||
      (trimmed.startsWith('{') && trimmed.endsWith('}')))
  ) {
    return trimmed;
  }

  // Handle ISO date strings
  if (isISODate(trimmed)) {
    return `new Date("${trimmed}")`;
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

export function renderProperties(
  customProperties: Record<string, any>,
  dataProperties?: Record<string, any>,
  classKey?: string, isJson?: boolean
) {
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
            return Object.entries(value)
              .map(([k, v]) => {
                if (k === 'customProperties' || k === 'generateReference') return '';
                return isJson === true? `${k}: ${resolveStateDefault(`${typeof v === 'object'? JSON.stringify(v) : v}`, `${v? typeof v : undefined}`, Array.isArray(v))}` : `${k}={ ${resolveStateDefault(`${typeof v === 'object'? JSON.stringify(v) : v}`, `${v? typeof v : undefined}`, Array.isArray(v))} }`;
              })
              .join('\n');
          } else {
            return isJson === true? `${key}: ${resolveStateDefault(`${typeof value === 'object'? JSON.stringify(value) : value}`, `${value? typeof value : undefined}`, Array.isArray(value))}` : `${key}={ ${resolveStateDefault(`${typeof value === 'object'? JSON.stringify(value) : value}`, `${value? typeof value : undefined}`, Array.isArray(value))} }`;
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
            return isJson === true
              ? `${key}: () => ${renderCode({
                  id: '',
                  name: `formReferenceUsage`,
                  properties: {
                    formTag: value.formSubmit.targetForm,
                  },
                })},`
              : `${key}={ () => ${renderCode({
                  id: '',
                  name: `formReferenceUsage`,
                  properties: {
                    formTag: value.formSubmit.targetForm,
                  },
                })} }`;
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

export function renderData(data: Record<string, any>, component?: Layout) {
  return data
    ? Object.entries(data)
        .map(([key, value]) => {
          if(key === 'content') return ''
          return `${key}={ ${replaceId(value.state?.name, component) ?? value.value?.code ?? 'undefined'} }`;
        })
        .join('\n')
    : ``;
}

function normalizeAnyType(t: string) {

  if(t === undefined) return undefined;

  if(t.includes('anyZodType'))
    return t.replace('anyZodType', 'any')

  return t;

}
