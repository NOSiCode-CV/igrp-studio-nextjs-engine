import { CommonProperties } from '../../interfaces/types';

export function switchProperties() {
  return {
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    description: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    message: { type: 'string', required: false }
  };
}

export function switchPropertiesMapping() {
  return {
    name: 'name',
    label: 'label',
    description: 'description',
    disabled: 'disabled',
    message: 'message'
  };
}

export function switchChildProperties() {
  return {
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    description: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    message: { type: 'string', required: false }
  };
}

export function switchChildPropertiesMapping() {
  return {
    name: 'name',
    label: 'label',
    description: 'description',
    disabled: 'disabled',
    message: 'message'
  };
}

export function switchVariants() {
  return {};
}
