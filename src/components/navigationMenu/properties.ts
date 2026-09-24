import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function navigationMenuProperties() {
  return {
    viewport: { type: 'boolean', required: false, default: true },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function navigationMenuPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function navigationMenuChildProperties() { return {}; }
export function navigationMenuChildPropertiesMapping() { return {}; }
export function navigationMenuVariants() { return {}; }
export function navigationMenuStyle() { return { ...baseStyle() }; }
export function navigationMenuRules() { return { ...baseRules() }; }
