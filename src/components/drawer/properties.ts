import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function drawerProperties() {
  return {
    title: { type: 'string', required: false },
    description: { type: 'string', required: false },
    open: { type: 'boolean', required: false, default: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function drawerPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function drawerChildProperties() { return {}; }
export function drawerChildPropertiesMapping() { return {}; }
export function drawerVariants() { return {}; }
export function drawerStyle() { return { ...baseStyle() }; }
export function drawerRules() { return { ...baseRules() }; }
