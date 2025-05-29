import { baseRules, baseStyle, commonProperties, commonPropertiesMapping } from '../default/properties';

export function stackProperties() {
  return {
    variant: { type: 'string', required: true, enum: ['xs', 'sm', 'md', 'lg'] },
    ...commonProperties()
  }
}

export function stackPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  }
}

export function stackChildProperties() {
  return {}
}

export function stackChildPropertiesMapping() {
  return {}
}

export function stackVariants() {
  return {
    xs: 'space-y-1',
    sm: 'space-y-2',
    md: 'space-y-4',
    lg: 'space-y-6',
  }
}

export function stackStyle() {
  return {
    ...baseStyle()
  }
}

export function stackRules() {
  return {
    ...baseRules()
  }
}
