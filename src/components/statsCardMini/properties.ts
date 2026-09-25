import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function statsCardMiniProperties() {
  return {
    title: { type: 'string', required: false, default: 'Title' },
    value: { type: 'string', required: false },
    trend: { type: 'string', required: false, enum: ['up', 'down', 'neutral'] },
    titleSize: { type: 'string', required: false, enum: ['sm', 'md', 'lg'] },
    titleClassName: { type: 'string', required: false },
    valueSize: { type: 'string', required: false, enum: ['sm', 'md', 'lg'] },
    valueClassName: { type: 'string', required: false },
    iconName: { type: 'string', required: false, 'x-ui-widget': 'icon' },
    iconClassName: { type: 'string', required: false },
    image: { type: 'string', required: false },
    imageAlt: { type: 'string', required: false },
    variant: { type: 'string', required: false, enum: ['default', 'outline', 'soft'] },
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
