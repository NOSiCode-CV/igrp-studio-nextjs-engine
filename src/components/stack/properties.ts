import { CommonProperties } from '../../interfaces/types';

export function stackProperties() {
  return {
    variant: { type: 'string', required: true, enum: ['xs', 'sm', 'md', 'lg'] }
  }
}

export function stackPropertiesMapping() {
  return {}
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