import { Component } from '../components';
import { Layout } from '../interfaces/types';

export function addClassNameFromChildProperties(parent: Layout, registry: Record<string, Component>): string {

  console.log('parent: ', parent)

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