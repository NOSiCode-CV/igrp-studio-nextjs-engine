import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function statsCardMiniProperties() {
  return {
    title: { type: 'string', required: false, default: 'Title' },
    value: { type: 'string', required: false },
    trend: { type: 'string', required: false, enum: ['up', 'down', 'neutral'] },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function statsCardMiniPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function statsCardMiniChildProperties() { return {}; }
export function statsCardMiniChildPropertiesMapping() { return {}; }
export function statsCardMiniVariants() { return {}; }
export function statsCardMiniStyle() { return { ...baseStyle() }; }
export function statsCardMiniRules() { return { ...baseRules() }; }
