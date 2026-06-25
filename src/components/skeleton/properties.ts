import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function skeletonProperties() {
  return {
    ...classProperties(),
    ...commonProperties(),
  };
}

export function skeletonPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function skeletonChildProperties() { return {}; }
export function skeletonChildPropertiesMapping() { return {}; }
export function skeletonVariants() { return {}; }
export function skeletonStyle() { return { ...baseStyle() }; }
export function skeletonRules() { return { ...baseRules() }; }
