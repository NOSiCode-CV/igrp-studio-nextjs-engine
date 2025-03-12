import { Component } from '../components';
import { Layout } from '../interfaces/types';
import { TABLE_COLUMNS } from '../components/table/children/tableColumns';
import { TABLE_FILTERS } from '../components/table/children/tableFilters';

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

export function extractTableColumns(children: Layout[]) {
  return children.filter((it) => it.componentName === TABLE_COLUMNS);
}

export function extractTableFilters(children: Layout[]) {
  return children.filter((it) => it.componentName === TABLE_FILTERS);
}