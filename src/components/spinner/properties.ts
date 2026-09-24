import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function spinnerProperties() {
  return {
    ...classProperties(),
    ...commonProperties(),
  };
}

export function spinnerPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function spinnerChildProperties() { return {}; }
export function spinnerChildPropertiesMapping() { return {}; }
export function spinnerVariants() { return {}; }
export function spinnerStyle() { return { ...baseStyle() }; }
export function spinnerRules() { return { ...baseRules() }; }
