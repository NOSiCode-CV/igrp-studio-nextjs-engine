import { CommonProperties } from '../../interfaces/types';

export function checkboxProperties() {
  return {
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    description: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    message: { type: 'string', required: false }
  };
}

export function checkboxPropertiesMapping() {
  return {
    name: 'name',
    label: 'label',
    description: 'description',
    disabled: 'disabled',
    message: 'message'
  };
}

export function checkboxChildProperties() {
  return {
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    description: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    message: { type: 'string', required: false }
  };
}

export function checkboxChildPropertiesMapping() {
  return {
    name: 'name',
    label: 'label',
    description: 'description',
    disabled: 'disabled',
    message: 'message'
  };
}

export function checkboxVariants() {
  return {};
}
