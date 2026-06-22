import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function imageCropperProperties() {
  return {
    variant: { type: 'string', required: false, default: 'default', enum: ['default', 'circle', 'square'] },
    image: { type: 'string', required: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function imageCropperPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function imageCropperChildProperties() { return {}; }
export function imageCropperChildPropertiesMapping() { return {}; }
export function imageCropperVariants() { return {}; }
export function imageCropperStyle() { return { ...baseStyle() }; }
export function imageCropperRules() { return { ...baseRules() }; }
