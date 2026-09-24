import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function menubarPortalProperties() {
  return {

    ...classProperties(),
    ...commonProperties(),
  };
}

export function menubarPortalPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function menubarPortalChildProperties() { return {}; }
export function menubarPortalChildPropertiesMapping() { return {}; }
export function menubarPortalVariants() { return {}; }
export function menubarPortalStyle() { return { ...baseStyle() }; }
export function menubarPortalRules() { return { ...baseRules() }; }
