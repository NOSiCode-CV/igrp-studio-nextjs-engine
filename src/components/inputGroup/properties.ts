import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function inputGroupProperties() {
  return {
    ...classProperties(),
    ...commonProperties(),
  };
}

export function inputGroupPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function inputGroupChildProperties() { return {}; }
export function inputGroupChildPropertiesMapping() { return {}; }
export function inputGroupVariants() { return {}; }
export function inputGroupStyle() { return { ...baseStyle() }; }
export function inputGroupRules() { return { ...baseRules() }; }
