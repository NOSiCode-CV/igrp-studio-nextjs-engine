import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function dateTimeInputProperties() {
  return {
    value: { type: 'string', required: false },
    label: { type: 'string', required: false },
    placeholder: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: false, default: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function dateTimeInputPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function dateTimeInputChildProperties() { return {}; }
export function dateTimeInputChildPropertiesMapping() { return {}; }
export function dateTimeInputVariants() { return {}; }
export function dateTimeInputStyle() { return { ...baseStyle() }; }
export function dateTimeInputRules() { return { ...baseRules() }; }
