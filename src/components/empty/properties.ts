import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function emptyProperties() {
  return {
    title: { type: 'string', required: false, default: 'Nothing here yet' },
    description: { type: 'string', required: false },
    iconName: { type: 'string', required: false, 'x-ui-widget': 'icon' },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function emptyPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function emptyChildProperties() { return {}; }
export function emptyChildPropertiesMapping() { return {}; }
export function emptyVariants() { return {}; }
export function emptyStyle() { return { ...baseStyle() }; }
export function emptyRules() { return { ...baseRules() }; }
