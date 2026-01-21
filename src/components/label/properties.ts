import {
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';

export function labelProperties() {
  return {
    label: { type: 'string', required: false, default: 'Label Text' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function labelPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function labelChildProperties() {
  return {};
}

export function labelChildPropertiesMapping() {
  return {};
}

export function labelVariants() {
  return {};
}

export function labelStyle() {
  return {
    ...baseStyle()
  }
}

export function labelRules() {
  return {
    ...baseRules()
  }
}