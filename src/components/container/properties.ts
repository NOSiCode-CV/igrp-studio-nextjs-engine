import { CommonProperties } from '../../interfaces/types';

export function containerProperties() {
  return {}
}

export function containerPropertiesMapping() {
  return {}
}

export function containerVariants() {
  return {
    default: 'container mx-auto px-4',
    narrow: 'container mx-auto px-4 max-w-4xl',
    wide: 'container mx-auto px-4 max-w-7xl',
  }
}