import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function menubarContentProperties() {
  return {

    ...classProperties(),
    ...commonProperties(),
  };
}

export function menubarContentPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function menubarContentChildProperties() { return {}; }
export function menubarContentChildPropertiesMapping() { return {}; }
export function menubarContentVariants() { return {}; }
export function menubarContentStyle() { return { ...baseStyle() }; }
export function menubarContentRules() { return { ...baseRules() }; }
