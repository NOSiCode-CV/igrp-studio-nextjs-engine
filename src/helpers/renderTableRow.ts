import { Layout } from '../interfaces/types';
import { Component } from '../components';
import { renderLayout } from '../utils/renderLayout';

export const renderTableRow = function (config: Layout, registry: Record<string, Component>): string {
  if (!config.componentName) return '<span className="font-medium">Invalid Component</span>';

  const table = registry['table']
  const component = registry[config.componentName]

  if(!component) return `<span className="font-medium">${config.componentName}</span>`

  return component.onTableComponent ?? (table.childrenTypes.has(config.componentName) ? renderLayout(config) : '<span className="bg-red-600 text-yellow-300 px-2 py-1 rounded">Unsupported Component</span>');

}