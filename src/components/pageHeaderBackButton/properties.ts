import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function pageHeaderBackButtonProperties() {
  return {
    href: { type: 'string', required: false, 'x-ui-widget': 'uri' },
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
