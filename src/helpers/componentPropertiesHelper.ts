import { Component } from '../components';
import { Layout } from '../interfaces/types';
import { TABLE_COLUMNS } from '../components/table/children/tableColumns';
import { TABLE_FILTERS } from '../components/table/children/tableFilters';
import { CARD_CONTENT } from '../components/card/children/cardContent';
import { CARD_FOOTER } from '../components/card/children/cardFooter';
import { loadPagesConfigSync } from '../utils/helpers';
import { toCamelCase } from './stringHelpers';

export function addClassNameFromChildProperties(parent: Layout, registry: Record<string, Component>): string {

  if(!parent.childProperties) return ''

  const parentElement = registry[parent.componentName]

  return Object.entries(parent.childProperties)
    .map(([key, value]) => {
      return parentElement?.childPropertiesMapping[key]?.className
        ? ` ${parentElement.childPropertiesMapping[key]?.className ?? key}${value}`
        : ``;
    })
    .join('')
}

export function addClassNameFromProperties(component: Layout, registry: Record<string, Component>): string {
  if(!component.properties) return ''

  const componentElement = registry[component.componentName]

  return Object.entries(component.properties)
    .map(([key, value]) => {
      return componentElement?.propertiesMapping[key]?.className
        ? ` ${componentElement.propertiesMapping[key]?.className ?? key}${value}`
        : ``;
    })
    .join('')
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
 * @returns {string} A string suitable for inclusion as a default state value in code.
 */
export function resolveStateDefault(defaultValue?: string): string {

  if(!defaultValue) return 'undefined'

  const trimmed = defaultValue.trim();

  // If it's clearly an array, object, number, boolean or null, return as-is
  if (
    trimmed === 'null' ||
    trimmed === 'undefined' ||
    trimmed === 'true' ||
    trimmed === 'false' ||
    trimmed === '[]' ||
    trimmed === '{}' ||
    !isNaN(Number(trimmed)) ||
    (trimmed.startsWith('[') && trimmed.endsWith(']')) ||
    (trimmed.startsWith('{') && trimmed.endsWith('}'))
  ) {
    return trimmed;
  }

  // Otherwise, treat it as a plain string literal
  return `"${trimmed.replace(/"/g, '\\"')}"`;
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
      return `${key}="${value}"`;
    }).join("\n")
    : ``
}

export function renderInteractions(interactions: Record<string, any>) {
  return interactions
    ? Object.entries(interactions).map(([key, value]) => {
      return `${key}={ ${value.fnName ?? value.fnCustomSet ?? value.state.name} }`;
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

