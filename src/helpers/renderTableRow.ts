import { Layout } from '../interfaces/types';
import { Component } from '../components';
import { renderLayout } from '../utils/renderLayout';
import { TABLE } from '../components/table';

export const renderTableRow = function (config: Layout, registry: Record<string, Component>): string {
  if (!config.componentName) return '<span className="font-medium">Invalid Component</span>';

  const table = registry[TABLE]
  const component = registry[config.componentName]

  if(!component) return `<span className="font-medium">${config.componentName}</span>`
  
  return component.onTableComponent
    ? table.acceptedChildren.has(component.onTableComponent) || registry[component.onTableComponent]?.group === TABLE
      ? renderLayout({ ...config, componentName: component.onTableComponent })
      : '<span className="bg-red-600 text-yellow-300 px-2 py-1 rounded">Unsupported Component</span>'
    : table.acceptedChildren.has(config.componentName) || component?.group === TABLE
      ? renderLayout(config)
      : '<span className="bg-red-600 text-yellow-300 px-2 py-1 rounded">Unsupported Component</span>';

}