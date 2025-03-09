import { CommonProperties } from '../../interfaces/types';

export function sectionProperties() {
  return {
    variant: { type: 'string', required: true, enum: ['default', 'compact', 'spacious'] }
  }
}

export function sectionPropertiesMapping() {
  return {}
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