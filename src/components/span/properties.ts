import { baseRules, baseStyle, commonProperties, commonPropertiesMapping } from '../default/properties';

export function spanProperties() {
  return {
    content: { type: 'string', required: true, default: 'Lorem ipsum dolor sit amet' },
    className: { type: 'string', required: false },
    ...commonProperties(),
  }
}

export function spanPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  }
}

export function spanChildProperties() {
  return {}
}

export function spanChildPropertiesMapping() {
  return {}
}

export function spanVariants() {
  return {
  }
}

export function spanStyle() {
  return {
    ...baseStyle()
  }
}

export function spanRules() {
  return {
    ...baseRules()
  }
}
