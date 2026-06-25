import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function scrollAreaProperties() {
  return {
    ...classProperties(),
    ...commonProperties(),
  };
}

export function scrollAreaPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function scrollAreaChildProperties() { return {}; }
export function scrollAreaChildPropertiesMapping() { return {}; }
export function scrollAreaVariants() { return {}; }
export function scrollAreaStyle() { return { ...baseStyle() }; }
export function scrollAreaRules() { return { ...baseRules() }; }
