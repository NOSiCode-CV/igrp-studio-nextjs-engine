import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function inputOTPProperties() {
  return {
    maxLength: { type: 'number', required: false, default: 6 },
    containerClassName: { type: 'string', required: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function inputOTPPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function inputOTPChildProperties() { return {}; }
export function inputOTPChildPropertiesMapping() { return {}; }
export function inputOTPVariants() { return {}; }
export function inputOTPStyle() { return { ...baseStyle() }; }
export function inputOTPRules() { return { ...baseRules() }; }
