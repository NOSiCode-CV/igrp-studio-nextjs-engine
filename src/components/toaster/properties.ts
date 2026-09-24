import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function toasterProperties() {
  return {
    ...classProperties(),
    ...commonProperties(),
  };
}

export function toasterPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function toasterChildProperties() { return {}; }
export function toasterChildPropertiesMapping() { return {}; }
export function toasterVariants() { return {}; }
export function toasterStyle() { return { ...baseStyle() }; }
export function toasterRules() { return { ...baseRules() }; }
