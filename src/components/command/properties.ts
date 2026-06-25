import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function commandProperties() {
  return {
    placeholder: { type: 'string', required: false, default: 'Type a command or search…' },
    emptyText: { type: 'string', required: false, default: 'No results.' },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function commandPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function commandChildProperties() { return {}; }
export function commandChildPropertiesMapping() { return {}; }
export function commandVariants() { return {}; }
export function commandStyle() { return { ...baseStyle() }; }
export function commandRules() { return { ...baseRules() }; }
