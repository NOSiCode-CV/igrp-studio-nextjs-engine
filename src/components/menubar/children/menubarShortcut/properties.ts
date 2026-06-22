import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function menubarShortcutProperties() {
  return {
    content: { type: 'string', required: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function menubarShortcutPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function menubarShortcutChildProperties() { return {}; }
export function menubarShortcutChildPropertiesMapping() { return {}; }
export function menubarShortcutVariants() { return {}; }
export function menubarShortcutStyle() { return { ...baseStyle() }; }
export function menubarShortcutRules() { return { ...baseRules() }; }
