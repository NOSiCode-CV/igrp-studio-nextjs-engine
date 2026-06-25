import {
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';

export function separatorProperties() {
  return {
    orientation: { type: 'string', required: true, enum: ['vertical', 'horizontal'], default: 'horizontal' },
    decorative: { type: 'boolean', required: false, default: true },

    ...classProperties(),
    ...commonProperties(),
  };
}

export function separatorPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function separatorChildProperties() {
  return {};
}

export function separatorChildPropertiesMapping() {
  return {};
}

export function separatorVariants() {
  return {};
}

export function separatorStyle() {
  return {
    ...baseStyle()
  }
}

export function separatorRules() {
  return {
    ...baseRules()
  }
}

