import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function tooltipProperties() {
  return {
    content: { type: 'string', required: false, default: 'Tooltip' },
    side: { type: 'string', required: false, default: 'top', enum: ['top', 'right', 'bottom', 'left'] },
    align: { type: 'string', required: false, default: 'center', enum: ['start', 'center', 'end'] },
    delayDuration: { type: 'number', required: false, default: 100 },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function tooltipPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function tooltipChildProperties() { return {}; }
export function tooltipChildPropertiesMapping() { return {}; }
export function tooltipVariants() { return {}; }
export function tooltipStyle() { return { ...baseStyle() }; }
export function tooltipRules() { return { ...baseRules() }; }
