import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function kbdProperties() {
  return {
    content: { type: 'string', required: false, default: 'Ctrl' },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function kbdPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function kbdChildProperties() { return {}; }
export function kbdChildPropertiesMapping() { return {}; }
export function kbdVariants() { return {}; }
export function kbdStyle() { return { ...baseStyle() }; }
export function kbdRules() { return { ...baseRules() }; }
