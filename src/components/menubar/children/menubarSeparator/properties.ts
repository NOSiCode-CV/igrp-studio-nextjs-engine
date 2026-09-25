import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function menubarSeparatorProperties() {
  return {

    ...classProperties(),
    ...commonProperties(),
  };
}

export function menubarSeparatorPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function menubarSeparatorChildProperties() { return {}; }
export function menubarSeparatorChildPropertiesMapping() { return {}; }
export function menubarSeparatorVariants() { return {}; }
export function menubarSeparatorStyle() { return { ...baseStyle() }; }
export function menubarSeparatorRules() { return { ...baseRules() }; }
