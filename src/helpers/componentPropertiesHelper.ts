import { Component } from '../components';
import { ElementField, Layout, StyleDefinition } from '../interfaces/types';
import { TABLE_COLUMNS } from '../components/table/children/tableColumns';
import { TABLE_FILTERS } from '../components/table/children/tableFilters';
import { CARD_CONTENT } from '../components/card/children/cardContent';
import { CARD_FOOTER } from '../components/card/children/cardFooter';
import { renderReference } from './resolveCodeBlocks';
import { capitalize, toCamelCase } from './stringHelpers';
import { renderCode } from '../utils/renderCode';
import { layoutStyleToClasses } from './layoutStyleToClasses';
import { spacingToClasses } from './spacingToClasses';
import { sizeToClasses } from './sizeToClasses';

export function addClassNameFromChildProperties(parent: Layout, registry: Record<string, Component>): string {

  if(!parent.childProperties) return ''

  const parentElement = registry[parent.componentName]

  return Object.entries(parent.childProperties)
    .map(([key, value]) => {

      return parentElement?.childPropertiesMapping[key]?.className !== undefined
        ? `'${parentElement.childPropertiesMapping[key]?.className ?? key}${value}',`
        : ``;
    })
    .join('')
}

export function addClassNameFromProperties(component: Layout, registry: Record<string, Component>): string {
  if(!component.properties) return ''

  const componentElement = registry[component.componentName]

  return Object.entries(component.properties)
    .map(([key, value]) => {
      return componentElement?.propertiesMapping[key]?.className !== undefined
        ? `'${componentElement.propertiesMapping[key]?.className ?? key}${value}',`
        : ``;
    })
    .join('')
}

export function addClassNameFromStyle(style: StyleDefinition) {

  const classes: string[] = []

  let { layout, spacing, size } = style ?? {}

  if(layout) {
    classes.push(`'${layoutStyleToClasses(layout)}',`);
  }

  if(spacing) {
    classes.push(`'${spacingToClasses(spacing)}',`);
  }

  if(size) {
    classes.push(`'${sizeToClasses(size)}',`);
  }

  return classes.join('')

}

export function resolveFirstType(data: any[]): string {
  return (!data || Object.entries(data).length == 0)? 'any' : `${data[0].type}`;
}

/**
 * Resolves a default state value from a string representation.
 *
 * - Wraps plain strings with double quotes.
 * - Returns arrays, objects, booleans, numbers, and `null` as-is.
 *
 * @param {string} defaultValue - The string representing the default value.
 * @param {string} type - The string representing the type.
 * @returns {string} A string suitable for inclusion as a default state value in code.
 */
export function resolveStateDefault(defaultValue?: string, type?: string): string {

  if(defaultValue === undefined || (defaultValue?.trim() === '' && type !== 'string')) return 'undefined'

  const trimmed = defaultValue.trim();

  // If it's clearly an array, object, number, boolean or null, return as-is
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

  // Otherwise, treat it as a plain string literal in case type is not present and is a string
  return type && type === 'string' ? `\"${trimmed.replace(/"/g, '\\"')}\"` : trimmed;
}


export function resolveZodTypes(field?: ElementField): string {
  if (!field) {
    return 'z.unknown()';
  }

  const { type, isList, required, validation } = field;
  let zodType: string;

  // Handle primitive types
  switch (type.toLowerCase()) {
    case 'string':
      zodType = 'z.string()';
      break;
    case 'number':
      zodType = 'z.number()';
      break;
    case 'boolean':
      zodType = 'z.boolean()';
      break;
    case 'date':
      zodType = 'z.date()';
      break;
    case 'any':
      zodType = 'z.any()';
      break;
    case 'unknown':
      zodType = 'z.unknown()';
      break;
    default:
      // Assume it's a custom type that will be defined elsewhere
      zodType = `${toCamelCase(type)}`;
  }

  // Handle validation if present
  if (validation) {
    // This is a simple implementation - you might want to parse the validation string
    // and apply appropriate Zod validations
    zodType += `.refine(${validation})`;
  }

  // Handle arrays
  if (isList) {
    zodType = `z.array(${zodType})`;
  }

  // Handle required/optional
  if (!required) {
    zodType += '.optional()';
  }

  return zodType;
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

export function resolveComponent(componentName: string, registry: Record<string, Component>, type?: string): string {

  if(!type) return registry[componentName]?.componentClass ?? 'any'

  if(type === 'button') {
    return registry[componentName.replace('Action', 'Button')]?.componentClass ?? 'any'
  } else {
    return registry[componentName]?.componentClass ?? 'any'
  }

}

export function renderProperties(customProperties: Record<string, any>) {
  return customProperties
    ? Object.entries(customProperties).map(([key, value]) => {
      return `${key}={ ${resolveStateDefault(value)} }`;
    }).join("\n")
    : ``
}

export function renderInteractions(interactions: Record<string, any>) {
  return interactions
    ? Object.entries(interactions).map(([key, value]) => {
      if(value.function && value.type === 'function') {
        if (!(value.function.fnName || value.function.fnCustomSet || value.function.state)) return;
        return `${key}={ ${value.function.fnName ?? value.function.fnCustomSet ?? value.function.state?.name} }`;
      }
      if(value.action && value.type === 'action') {
        if (!(value.action.actionName || value.action.actionCustomSet || value.action.state)) return;
        return `${key}={ ${value.action.actionName ?? value.action.actionCustomSet ?? value.action.state?.name} }`;
      }
      if(value.formSubmit && value.type === 'formSubmit') {
        if (!(value.formSubmit.targetForm)) return;
        return `${key}={ () => ${
          renderCode({
            id: '',
            name: `formReferenceUsage`,
            properties: {
              formTag: value.formSubmit.targetForm
            }
          })
        } }`;
      }
      if(value.navigate && value.type === 'navigate') {
        if(!value.navigate.path) return
        return `${key}={ () => ${value.navigate.name}() }`;
      }
    }).join("\n")
    : ``
}

export function renderData(data: Record<string, any>) {
  return data
    ? Object.entries(data).map(([key, value]) => {
      return `${key}={ ${value.state?.name ?? 'undefined'} }`;
    }).join("\n")
    : ``
}

