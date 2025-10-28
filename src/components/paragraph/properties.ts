import {
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';

export function paragraphProperties() {
  return {
    content: { type: 'string', required: true, default: 'Lorem ipsum dolor sit amet' },
    ...classProperties(),
    ...commonProperties(),
  }
}

export function paragraphPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  }
}

export function paragraphChildProperties() {
  return {}
}

export function paragraphChildPropertiesMapping() {
  return {}
}

export function paragraphVariants() {
  return {
  }
}

export function paragraphStyle() {
  return {
    ...baseStyle()
  }
}

export function paragraphRules() {
  return {
    ...baseRules()
  }
}
