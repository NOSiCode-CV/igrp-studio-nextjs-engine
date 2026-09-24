import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function menubarGroupProperties() {
  return {

    ...classProperties(),
    ...commonProperties(),
  };
}

export function menubarGroupPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function menubarGroupChildProperties() { return {}; }
export function menubarGroupChildPropertiesMapping() { return {}; }
export function menubarGroupVariants() { return {}; }
export function menubarGroupStyle() { return { ...baseStyle() }; }
export function menubarGroupRules() { return { ...baseRules() }; }
