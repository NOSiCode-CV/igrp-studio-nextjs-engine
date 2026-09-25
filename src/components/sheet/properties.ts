import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function sheetProperties() {
  return {
    side: { type: 'string', required: false, default: 'right', enum: ['top', 'right', 'bottom', 'left'] },
    title: { type: 'string', required: false },
    description: { type: 'string', required: false },
    open: { type: 'boolean', required: false, default: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function sheetPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function sheetChildProperties() { return {}; }
export function sheetChildPropertiesMapping() { return {}; }
export function sheetVariants() { return {}; }
export function sheetStyle() { return { ...baseStyle() }; }
export function sheetRules() { return { ...baseRules() }; }
