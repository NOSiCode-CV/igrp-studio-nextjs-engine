import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function menubarItemProperties() {
  return {
    content: { type: 'string', required: false, default: 'Item' },
    disabled: { type: 'boolean', required: false, default: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function menubarItemPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function menubarItemChildProperties() { return {}; }
export function menubarItemChildPropertiesMapping() { return {}; }
export function menubarItemVariants() { return {}; }
export function menubarItemStyle() { return { ...baseStyle() }; }
export function menubarItemRules() { return { ...baseRules() }; }
