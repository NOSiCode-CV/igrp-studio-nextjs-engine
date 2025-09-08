import { Component } from '../components';
import { Arguments, ElementField, Layout, Segment, StyleDefinition } from '../interfaces/types';
import { TABLE_COLUMNS } from '../components/table/children/tableColumns';
import { TABLE_FILTERS } from '../components/table/children/tableFilters';
import { CARD_CONTENT } from '../components/card/children/cardContent';
import { CARD_FOOTER } from '../components/card/children/cardFooter';
import { capitalize, toCamelCase } from './stringHelpers';
import { renderCode } from '../utils/renderCode';
import { layoutStyleToClasses } from './layoutStyleToClasses';
import { spacingToClasses } from './spacingToClasses';
import { sizeToClasses } from './sizeToClasses';
import { isString, replaceTemplate } from '../utils/helpers';
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
import { PROCESS_STEP } from '../components/processStep/index';

export function addClassNameFromChildProperties(
  parent: Layout,
  registry: Record<string, Component>,
): string {
  if (!parent.childProperties) return '';

  const parentElement = registry[parent.componentName];

  return Object.entries(parent.childProperties)
    .map(([key, value]) => {
      return parentElement?.childPropertiesMapping[key]?.className !== undefined
        ? `'${parentElement.childPropertiesMapping[key]?.className ?? key}${value}',`
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

  if(type === 'string') {
    if(defaultValue === undefined)
      return 'undefined';
    else return `\`${defaultValue.replace(/"/g, '\\"')}\``;
  }

  const trimmed = defaultValue?.trim() ?? '';

  if (trimmed === '' && !['string', 'object'].includes(type ?? '')) return 'undefined';

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

  // Handle object with nested fields
  if (type === 'object' && fields && fields.length > 0) {
    const objectBody = fields
      .map((f) => {
        const value = resolveStateDefault(f.defaultValue, f.type, f.isList, f.fields);
        return `${f.name}: ${value}`;
      })
      .join(', ');
    const result = `{ ${objectBody} }`;
    return isList === true ? `[${result}]` : result;
  }

  // Handle lists
  if (isList === true) {
    return trimmed !== '' ? trimmed : '[]';
  }

  // Handle strings and fallback
  return type === 'string' ? `\`${trimmed.replace(/"/g, '\\"')}\`` : trimmed;
}

export function resolveZodTypes(field?: ElementField): string {
  if (!field) return 'z.unknown()';

  const { type, isList, required, validation, fields } = field;
  let zodType: string;
  const lowerType = type.toLowerCase();

  const isPrimitive = ['string', 'number', 'boolean', 'date', 'any', 'unknown'].includes(lowerType);

  if (lowerType === 'object' && fields && fields.length > 0) {
    const inner = fields.map(f => `${f.name}: ${resolveZodTypes(f)}`).join(', ');
    zodType = `z.object({ ${inner} })`;
  } else if (isPrimitive) {
    switch (lowerType) {
      case 'string': zodType = 'z.string()'; break;
      case 'number': zodType = 'z.number()'; break;
      case 'boolean': zodType = 'z.boolean()'; break;
      case 'date': zodType = 'z.date()'; break;
      case 'any': zodType = 'z.any()'; break;
      default: zodType = 'z.unknown()';
    }
  } else {
    zodType = `${toCamelCase(type)}`;
  }

  // Apply validations
  if (validation) {
    const validators: string[] = [];

    if (lowerType === 'string') {
      if (validation.minLength) validators.push(`.min(${validation.minLength})`);
      if (validation.maxLength) validators.push(`.max(${validation.maxLength})`);
      if (validation.regex) validators.push(`.regex(${validation.regex})`);
      if (validation.email) validators.push(`.email()`);
      if (validation.url) validators.push(`.url()`);
      if (validation.uuid) validators.push(`.uuid()`);
      if (validation.startsWith) validators.push(`.startsWith(${JSON.stringify(validation.startsWith)})`);
      if (validation.endsWith) validators.push(`.endsWith(${JSON.stringify(validation.endsWith)})`);
      if (validation.includes) validators.push(`.includes(${JSON.stringify(validation.includes)})`);
    }

    if (lowerType === 'number') {
      if (validation.min !== undefined) validators.push(`.min(${validation.min})`);
      if (validation.max !== undefined) validators.push(`.max(${validation.max})`);
      if (validation.positive) validators.push(`.positive()`);
      if (validation.negative) validators.push(`.negative()`);
      if (validation.int) validators.push(`.int()`);
      if (validation.finite) validators.push(`.finite()`);
    }

    if (lowerType === 'date') {
      if (validation.minDate) validators.push(`.refine(d => d >= new Date(${JSON.stringify(validation.minDate)}), { message: 'Date must be after ${validation.minDate}' })`);
      if (validation.maxDate) validators.push(`.refine(d => d <= new Date(${JSON.stringify(validation.maxDate)}), { message: 'Date must be before ${validation.maxDate}' })`);
    }

    zodType += validators.join('');
  }

  if (isList === true) {
    zodType = `z.array(${zodType})`;
  }

  if (!required) {
    zodType += '.optional()';
  } else {
    if(lowerType === "string") {
      zodType += '.nonempty()';
    }
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

  const visibilityRules = config.rules?.filter((it) => it.type === 'visibility') ?? []

  return `...(${visibilityRules.map((it) => it.condition)[0]} ? [`

}

export function checkRules(config: Layout): boolean {

  const visibilityRules = config.rules?.filter((it) => it.type === 'visibility') ?? []

  return (config.rules && visibilityRules.length > 0) ?? false;

}

export function extractTableColumns(children: Layout[]) {
  return children.filter((it) => it.componentName === TABLE_COLUMNS);
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

export function extractProcessSteps(children: Layout[]) {
  return children.filter((it) => it.componentName === PROCESS_STEP);
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
                return isJson === true? `${k}: ${resolveStateDefault(`${v}`, `${value? typeof value : undefined}`)}` : `${k}={ ${resolveStateDefault(`${v}`, `${value? typeof value : undefined}`)} }`;
              })
              .join('\n');
          } else {
            return isJson === true? `${key}: ${resolveStateDefault(`${value}`, `${value? typeof value : undefined}`)}` : `${key}={ ${resolveStateDefault(`${value}`, `${value? typeof value : undefined}`)} }`;
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
