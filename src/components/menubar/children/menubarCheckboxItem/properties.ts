import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function menubarCheckboxItemProperties() {
  return {
    content: { type: 'string', required: false },
    checked: { type: 'boolean', required: false, default: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function menubarCheckboxItemPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function menubarCheckboxItemChildProperties() { return {}; }
export function menubarCheckboxItemChildPropertiesMapping() { return {}; }
export function menubarCheckboxItemVariants() { return {}; }
export function menubarCheckboxItemStyle() { return { ...baseStyle() }; }
export function menubarCheckboxItemRules() { return { ...baseRules() }; }
