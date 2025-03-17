import { Layout } from '../interfaces/types';
import { Component } from '../components';
import { renderLayout } from '../utils/renderLayout';
import { TABLE_COLUMNS } from '../components/table/children/tableColumns';
import { TABLE_FILTERS } from '../components/table/children/tableFilters';

export const renderTableRow = function (config: Layout, registry: Record<string, Component>): string {
  if (!config.componentName) return '<span className="font-medium">Invalid Component</span>';

  const table = config.componentName.includes('Cell') ? registry[TABLE_COLUMNS] : registry[TABLE_FILTERS]

  const component = registry[config.componentName]

  if(!component) return `<span className="font-medium">${config.componentName}</span>`

  return Array.from(table.acceptedChildren).map((it) => it.name).includes(config.componentName)
      ? renderLayout(config)
      : '<span className="bg-red-600 text-yellow-300 px-2 py-1 rounded">Unsupported Component</span>';

}