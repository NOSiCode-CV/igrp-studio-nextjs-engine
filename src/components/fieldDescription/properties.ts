import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function fieldDescriptionProperties() {
  return {
    content: { type: 'string', required: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function fieldDescriptionPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function fieldDescriptionChildProperties() { return {}; }
export function fieldDescriptionChildPropertiesMapping() { return {}; }
export function fieldDescriptionVariants() { return {}; }
export function fieldDescriptionStyle() { return { ...baseStyle() }; }
export function fieldDescriptionRules() { return { ...baseRules() }; }
