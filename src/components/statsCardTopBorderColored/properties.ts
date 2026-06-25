import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function statsCardTopBorderColoredProperties() {
  return {
    title: { type: 'string', required: false, default: 'Title' },
    value: { type: 'string', required: false },
    color: { type: 'string', required: false, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info'] },
    cardVariant: { type: 'string', required: false, enum: ['default', 'soft', 'outline'] },
    iconName: { type: 'string', required: false, 'x-ui-widget': 'icon' },
    iconClassName: { type: 'string', required: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function statsCardTopBorderColoredPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function statsCardTopBorderColoredChildProperties() { return {}; }
export function statsCardTopBorderColoredChildPropertiesMapping() { return {}; }
export function statsCardTopBorderColoredVariants() { return {}; }
export function statsCardTopBorderColoredStyle() { return { ...baseStyle() }; }
export function statsCardTopBorderColoredRules() { return { ...baseRules() }; }
