import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function notificationProperties() {
  return {
    variant: { type: 'string', required: false, default: 'info', enum: ['info', 'success', 'warning', 'destructive'] },
    title: { type: 'string', required: false, default: 'Notification' },
    description: { type: 'string', required: false },
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
