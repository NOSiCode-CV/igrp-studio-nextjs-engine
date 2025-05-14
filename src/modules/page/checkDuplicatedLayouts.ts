import { Layout } from '../../interfaces/types';

/**
 * Recursively flattens all Layout components from a tree.
 */
function flattenLayouts(layouts: Layout[], result: Layout[] = []): Layout[] {
  for (const layout of layouts) {
    result.push(layout);
    if (layout.children && layout.children.length > 0) {
      flattenLayouts(layout.children, result);
    }
  }
  return result;
}

/**
 * Detects duplicates by a given key in a list of Layouts.
 */
function findLayoutDuplicates(layouts: Layout[], key: 'id' | 'tag'): Record<string, Layout[]> {
  const map: Record<string, Layout[]> = {};
  for (const layout of layouts) {
    const value = layout[key];
    if (!value) continue;
    if (!map[value]) map[value] = [];
    map[value].push(layout);
  }

  const duplicates: Record<string, Layout[]> = {};
  for (const [k, v] of Object.entries(map)) {
    if (v.length > 1) {
      duplicates[k] = v;
    }
  }
  return duplicates;
}

/**
 * Checks duplicated `id` or `tag` fields in Layout components.
 */
export function checkDuplicatedLayouts(components: Layout[]): void {
  const allLayouts = flattenLayouts(components);

  const idDuplicates = findLayoutDuplicates(allLayouts, 'id');
  const tagDuplicates = findLayoutDuplicates(allLayouts, 'tag');

  const errors: string[] = [];

  for (const [id, layouts] of Object.entries(idDuplicates)) {
    const components = layouts.map((l) => l.tag).join(', ');
    errors.push(`Duplicate ID "${id}" found in components with tags: ${components}`);
  }

  for (const [tag, layouts] of Object.entries(tagDuplicates)) {
    const components = layouts.map((l) => l.id).join(', ');
    errors.push(`Duplicate tag "${tag}" found in components with IDs: ${components}`);
  }

  if (errors.length > 0) {
    throw new Error(`Layout duplication errors:\n- ${errors.join('\n- ')}`);
  }
}
