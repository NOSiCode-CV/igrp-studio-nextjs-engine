import { Layout } from '../interfaces/types';
import { Component } from '../components';
import { renderLayout } from '../utils/renderLayout';
import { TABLE_COLUMNS } from '../components/table/children/tableColumns';
import { TABLE_FILTERS } from '../components/table/children/tableFilters';
import { extractTextListItemSubItems } from './componentPropertiesHelper';

/**
 * Extracts `IGRPTextListItem` subItems recursively from children.
 */
function extractTextListItemSubItem(children?: Layout[]): any {
  if (!children) return undefined;

  const subItemLayouts = extractTextListItemSubItems(children);

  if (!subItemLayouts.length) return undefined;

  return subItemLayouts.map((layout) => JSON.parse(renderTextListItem(layout)));
}

/**
 * Extracts the content of a text list item from children layouts.
 */
function extractTextListItemContent(children?: Layout[]): string | undefined {
  if (!children?.length) return undefined;
  return children.map((child) => renderLayout(child)).join('\n');
}

/**
 * Renders a Layout into an IGRPTextListItem JSON string.
 */
export const renderTextListItem = function (config: Layout): string {
  const {
    id,
    variant,
    completed,
    disabled,
    icon,
    iconColor,
    badgeText,
    badgeVariant,
    badgeColor,
  } = config.properties || {};

  const content = '<>' + extractTextListItemContent(config.children) + '</>';
  const subItems = extractTextListItemSubItem(config.children);

  const result = {
    id,
    variant,
    completed,
    disabled,
    icon,
    iconColor,
    badgeText,
    badgeVariant,
    badgeColor,
    content,
    subItems,
  };

  return JSON.stringify(result, null, 2);
};
