import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function menubarRadioGroupProperties() {
  return {
    value: { type: 'string', required: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function menubarRadioGroupPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function menubarRadioGroupChildProperties() { return {}; }
export function menubarRadioGroupChildPropertiesMapping() { return {}; }
export function menubarRadioGroupVariants() { return {}; }
export function menubarRadioGroupStyle() { return { ...baseStyle() }; }
export function menubarRadioGroupRules() { return { ...baseRules() }; }
