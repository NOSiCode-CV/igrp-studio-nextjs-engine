import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function menubarSubTriggerProperties() {
  return {
    content: { type: 'string', required: false, default: 'Submenu' },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function menubarSubTriggerPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function menubarSubTriggerChildProperties() { return {}; }
export function menubarSubTriggerChildPropertiesMapping() { return {}; }
export function menubarSubTriggerVariants() { return {}; }
export function menubarSubTriggerStyle() { return { ...baseStyle() }; }
export function menubarSubTriggerRules() { return { ...baseRules() }; }
