import { CommonProperties } from '../../interfaces/types';

export function selectProperties() {
  return {
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    options: { type: 'array', required: true }, // Array of objects with value and label
    description: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    message: { type: 'string', required: false }
  };
}

export function selectPropertiesMapping() {
  return {
    name: 'name',
    label: 'label',
    options: 'options',
    description: 'description',
    disabled: 'disabled',
    message: 'message'
  };
}

export function selectVariants() {
  return {};
}
