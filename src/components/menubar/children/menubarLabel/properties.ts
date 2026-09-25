import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function menubarLabelProperties() {
  return {
    content: { type: 'string', required: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function menubarLabelPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function menubarLabelChildProperties() { return {}; }
export function menubarLabelChildPropertiesMapping() { return {}; }
export function menubarLabelVariants() { return {}; }
export function menubarLabelStyle() { return { ...baseStyle() }; }
export function menubarLabelRules() { return { ...baseRules() }; }
