import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function menubarTriggerProperties() {
  return {
    content: { type: 'string', required: false, default: 'Menu' },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function menubarTriggerPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function menubarTriggerChildProperties() { return {}; }
export function menubarTriggerChildPropertiesMapping() { return {}; }
export function menubarTriggerVariants() { return {}; }
export function menubarTriggerStyle() { return { ...baseStyle() }; }
export function menubarTriggerRules() { return { ...baseRules() }; }
