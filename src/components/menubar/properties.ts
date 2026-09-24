import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function menubarProperties() {
  return {
    ...classProperties(),
    ...commonProperties(),
  };
}

export function menubarPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function menubarChildProperties() { return {}; }
export function menubarChildPropertiesMapping() { return {}; }
export function menubarVariants() { return {}; }
export function menubarStyle() { return { ...baseStyle() }; }
export function menubarRules() { return { ...baseRules() }; }
