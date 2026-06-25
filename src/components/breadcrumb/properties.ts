import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function breadcrumbProperties() {
  return {
    items: { type: 'array', required: false, items: { type: 'object', properties: { label: { type: 'string' }, href: { type: 'string' } } } },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function breadcrumbPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function breadcrumbChildProperties() { return {}; }
export function breadcrumbChildPropertiesMapping() { return {}; }
export function breadcrumbVariants() { return {}; }
export function breadcrumbStyle() { return { ...baseStyle() }; }
export function breadcrumbRules() { return { ...baseRules() }; }
