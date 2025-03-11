import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function sectionProperties() {
  return {
    variant: { type: 'string', required: true, enum: ['default', 'compact', 'spacious'], default: 'compact' },
      spaceX: { type: 'string', required: false, enum: ['1', '2', '3', '4', '5', '6'], default: '3' },
      spaceY: { type: 'string', required: false, enum: ['1', '2', '3', '4', '5', '6'], default: '3' },
    ...commonProperties(),
  }
}

export function sectionPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
    spaceX: {
      className: 'space-x-'
    },
    spaceY: {
      className: 'space-y-'
    }
  }
}

export function sectionChildProperties() {
  return {}
}

export function sectionChildPropertiesMapping() {
  return {}
}

export function sectionVariants() {
  return {
    default: 'py-12',
    compact: 'py-6',
    spacious: 'py-24',
    // ...
  }
}