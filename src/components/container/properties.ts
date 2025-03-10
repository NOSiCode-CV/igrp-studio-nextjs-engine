import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function containerProperties() {
  return {
    variant: { type: 'string', required: true, enum: ['default', 'narrow', 'wide'] },
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
    default: 'mx-auto px-4',
    narrow: 'mx-auto px-4 max-w-4xl',
    wide: 'mx-auto px-4 max-w-7xl',
  }
}