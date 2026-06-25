import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function popoverProperties() {
  return {
    align: { type: 'string', required: false, default: 'center', enum: ['start', 'center', 'end'] },
    sideOffset: { type: 'number', required: false, default: 4 },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function popoverPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function popoverChildProperties() { return {}; }
export function popoverChildPropertiesMapping() { return {}; }
export function popoverVariants() { return {}; }
export function popoverStyle() { return { ...baseStyle() }; }
export function popoverRules() { return { ...baseRules() }; }
