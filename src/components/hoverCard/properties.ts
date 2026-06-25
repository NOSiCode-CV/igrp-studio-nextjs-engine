import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function hoverCardProperties() {
  return {
    align: { type: 'string', required: false, default: 'center', enum: ['start', 'center', 'end'] },
    sideOffset: { type: 'number', required: false, default: 4 },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function hoverCardPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function hoverCardChildProperties() { return {}; }
export function hoverCardChildPropertiesMapping() { return {}; }
export function hoverCardVariants() { return {}; }
export function hoverCardStyle() { return { ...baseStyle() }; }
export function hoverCardRules() { return { ...baseRules() }; }
