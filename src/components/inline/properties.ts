import { CommonProperties } from '../../interfaces/types';

export function inlineProperties() {
  return {
    variant: { type: 'string', required: true, enum: ['xs', 'sm', 'md', 'lg'] }
  }
}

export function inlinePropertiesMapping() {
  return {}
}

export function inlineChildProperties() {
  return {}
}

export function inlineChildPropertiesMapping() {
  return {}
}

export function inlineVariants() {
  return {
    xs: 'space-x-1',
    sm: 'space-x-2',
    md: 'space-x-4',
    lg: 'space-x-6',
  }
}