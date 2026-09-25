import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function loadingSpinnerProperties() {
  return {
    label: { type: 'string', required: false, default: 'Loading…' },
    parentClassName: { type: 'string', required: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function loadingSpinnerPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function loadingSpinnerChildProperties() { return {}; }
export function loadingSpinnerChildPropertiesMapping() { return {}; }
export function loadingSpinnerVariants() { return {}; }
export function loadingSpinnerStyle() { return { ...baseStyle() }; }
export function loadingSpinnerRules() { return { ...baseRules() }; }
