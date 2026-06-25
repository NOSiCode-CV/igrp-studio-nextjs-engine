import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function aspectRatioProperties() {
  return {
    ratio: { type: 'number', required: false, default: 1 },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function aspectRatioPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function aspectRatioChildProperties() { return {}; }
export function aspectRatioChildPropertiesMapping() { return {}; }
export function aspectRatioVariants() { return {}; }
export function aspectRatioStyle() { return { ...baseStyle() }; }
export function aspectRatioRules() { return { ...baseRules() }; }
