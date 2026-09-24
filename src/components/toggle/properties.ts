import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function toggleProperties() {
  return {
    variant: { type: 'string', required: false, default: 'default', enum: ['default', 'outline'] },
    size: { type: 'string', required: false, default: 'default', enum: ['default', 'sm', 'lg'] },
    pressed: { type: 'boolean', required: false, default: false },
    disabled: { type: 'boolean', required: false, default: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function togglePropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function toggleChildProperties() { return {}; }
export function toggleChildPropertiesMapping() { return {}; }
export function toggleVariants() { return {}; }
export function toggleStyle() { return { ...baseStyle() }; }
export function toggleRules() { return { ...baseRules() }; }
