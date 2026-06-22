import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function menubarSubContentProperties() {
  return {

    ...classProperties(),
    ...commonProperties(),
  };
}

export function menubarSubContentPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function menubarSubContentChildProperties() { return {}; }
export function menubarSubContentChildPropertiesMapping() { return {}; }
export function menubarSubContentVariants() { return {}; }
export function menubarSubContentStyle() { return { ...baseStyle() }; }
export function menubarSubContentRules() { return { ...baseRules() }; }
