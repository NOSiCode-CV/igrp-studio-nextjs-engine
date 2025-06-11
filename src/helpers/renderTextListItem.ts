import { Layout } from '../interfaces/types';
import { extractTextListItemContent, extractTextListItemSubItems } from './componentPropertiesHelper';
import { renderLayout } from '../utils/renderLayout';
import { IGRPTextListItem } from '../components/textList/children/textListItem/index';

function renderTextListItemSubItem(children?: Layout[]): IGRPTextListItem[] | undefined {
  if (!children) return undefined;

  const subItemLayouts = extractTextListItemSubItems(children);

  if (!(subItemLayouts && subItemLayouts.length > 0)) return undefined;

  return subItemLayouts[0].children?.map((layout) => renderTextListItemJson(layout));
}

function renderTextListItemContent(children?: Layout[]): string | undefined {
  if (!children?.length) return undefined;

  const contents = children.map((child) => {
    if (child.properties?.content !== undefined && child.properties?.content !== '') {
      return child.properties.content;
    }
    return renderLayout(child);
  });

  return `${contents.join('\n')}`;
}

const renderTextListItemJson = (config: Layout): IGRPTextListItem => {
  const {
    variant,
    completed,
    disabled,
    icon,
    iconColor,
    badgeText,
    badgeVariant,
    badgeColor,
  } = config.properties || {};

  const content = renderTextListItemContent(extractTextListItemContent(config.children ?? []));
  const subItems = renderTextListItemSubItem(config.children);

  return {
    id: config.tag,
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
};

export function renderTextListItem(config: Layout): string {
  const item = renderTextListItemJson(config);

  // Manually construct the object string to avoid JSON escaping
  const result = [
    '{',
    `  id: '${item.id}',`,
    item.badgeText && `  badgeText: '${item.badgeText}',`,
    item.badgeVariant && `  badgeVariant: '${item.badgeVariant}',`,
    item.badgeColor && `  badgeColor: '${item.badgeColor}',`,
    item.content && `  content: ${item.content},`,
    item.subItems && `  subItems: [\n${item.subItems.map(subItem =>
      `    {\n      id: '${subItem.id}',\n${subItem.content ? `      content: '${subItem.content}',\n` : ''}    }`
    ).join(',\n')}\n  ],`,
    '}'
  ].filter(Boolean).join('\n');

  return result;
}