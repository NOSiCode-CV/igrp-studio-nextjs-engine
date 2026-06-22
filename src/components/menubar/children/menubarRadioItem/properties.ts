import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function menubarRadioItemProperties() {
  return {
    content: { type: 'string', required: false },
    value: { type: 'string', required: true },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function menubarRadioItemPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function menubarRadioItemChildProperties() { return {}; }
export function menubarRadioItemChildPropertiesMapping() { return {}; }
export function menubarRadioItemVariants() { return {}; }
export function menubarRadioItemStyle() { return { ...baseStyle() }; }
export function menubarRadioItemRules() { return { ...baseRules() }; }
