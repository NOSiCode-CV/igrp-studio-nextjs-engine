import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function menubarSubProperties() {
  return {

    ...classProperties(),
    ...commonProperties(),
  };
}

export function menubarSubPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function menubarSubChildProperties() { return {}; }
export function menubarSubChildPropertiesMapping() { return {}; }
export function menubarSubVariants() { return {}; }
export function menubarSubStyle() { return { ...baseStyle() }; }
export function menubarSubRules() { return { ...baseRules() }; }
