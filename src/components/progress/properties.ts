import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function progressProperties() {
  return {
    value: { type: 'number', required: false, default: 0 },
    indicatorClassName: { type: 'string', required: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function progressPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function progressChildProperties() { return {}; }
export function progressChildPropertiesMapping() { return {}; }
export function progressVariants() { return {}; }
export function progressStyle() { return { ...baseStyle() }; }
export function progressRules() { return { ...baseRules() }; }
