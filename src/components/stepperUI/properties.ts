import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function stepperUIProperties() {
  return {
    defaultValue: { type: 'number', required: false, default: 0 },
    value: { type: 'number', required: false },
    orientation: { type: 'string', required: false, default: 'horizontal', enum: ['horizontal', 'vertical'] },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function stepperUIPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function stepperUIChildProperties() { return {}; }
export function stepperUIChildPropertiesMapping() { return {}; }
export function stepperUIVariants() { return {}; }
export function stepperUIStyle() { return { ...baseStyle() }; }
export function stepperUIRules() { return { ...baseRules() }; }
