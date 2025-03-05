import { CommonProperties } from '../../interfaces/types';

export function inputProperties() {
  return {
    type: { type: 'string', required: false, default: 'text' },
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    placeholder: { type: 'string', required: false },
    description: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    message: { type: 'string', required: false }
  };
}

export function inputPropertiesMapping() {
  return {
    type: 'type',
    name: 'name',
    label: 'label',
    placeholder: 'placeholder',
    description: 'description',
    disabled: 'disabled',
    message: 'message'
  };
}

export function inputVariants() {
  return {};
}
