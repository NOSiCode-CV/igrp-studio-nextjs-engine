import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function notificationProperties() {
  return {
    variant: { type: 'string', required: false, default: 'info', enum: ['info', 'success', 'warning', 'destructive'] },
    showIcon: { type: 'boolean', required: false, default: true },
    iconName: { type: 'string', required: false, 'x-ui-widget': 'icon' },
    content: { type: 'string', required: false },
    showClose: { type: 'boolean', required: false, default: true },
    showLink: { type: 'boolean', required: false, default: false },
    lableLink: { type: 'string', required: false },
    actionLink: { type: 'string', required: false, 'x-ui-widget': 'uri' },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function notificationPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function notificationChildProperties() { return {}; }
export function notificationChildPropertiesMapping() { return {}; }
export function notificationVariants() { return {}; }
export function notificationStyle() { return { ...baseStyle() }; }
export function notificationRules() { return { ...baseRules() }; }
