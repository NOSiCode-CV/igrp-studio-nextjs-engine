import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function menubarMenuProperties() {
  return {

    ...classProperties(),
    ...commonProperties(),
  };
}

export function menubarMenuPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function menubarMenuChildProperties() { return {}; }
export function menubarMenuChildPropertiesMapping() { return {}; }
export function menubarMenuVariants() { return {}; }
export function menubarMenuStyle() { return { ...baseStyle() }; }
export function menubarMenuRules() { return { ...baseRules() }; }
