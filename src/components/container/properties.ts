import {
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';

export function containerProperties() {
  return {
    variant: { type: 'string', required: true, enum: ['default', 'narrow', 'wide'] },
    ...classProperties(),
    ...commonProperties(),
  }
}

export function containerPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  }
}

export function containerChildProperties() {
  return {}
}

export function containerChildPropertiesMapping() {
  return {}
}

export function containerVariants() {
  return {
  }
}

export function containerStyle() {
  return {
    ...baseStyle()
  }
}

export function containerRules() {
  return {
    ...baseRules()
  }
}

