import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function pageHeaderBackButtonProperties() {
  return {
    iconName: { type: 'string', required: false, default: 'ArrowLeft', 'x-ui-widget': 'icon' },
    variant: { type: 'string', required: false, default: 'ghost', enum: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] },
    size: { type: 'string', required: false, default: 'icon', enum: ['default', 'sm', 'lg', 'icon'] },
    ariaLabel: { type: 'string', required: false, default: 'Go back' },
    showText: { type: 'boolean', required: false, default: false },
    text: { type: 'string', required: false, default: 'Back' },
    url: { type: 'string', required: false, 'x-ui-widget': 'uri' },
    useBrowserBack: { type: 'boolean', required: false, default: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function pageHeaderBackButtonPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function pageHeaderBackButtonChildProperties() { return {}; }
export function pageHeaderBackButtonChildPropertiesMapping() { return {}; }
export function pageHeaderBackButtonVariants() { return {}; }
export function pageHeaderBackButtonStyle() { return { ...baseStyle() }; }
export function pageHeaderBackButtonRules() { return { ...baseRules() }; }
