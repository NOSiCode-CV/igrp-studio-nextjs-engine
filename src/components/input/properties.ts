import { CommonProperties } from '../../interfaces/types';

export function inputProperties() {
  return {
    type: { type: 'string', required: false, default: 'text' },
    name: { type: 'string', required: true },
    placeholder: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    customProperties: { type: 'array', required: false }
  };
}

export function inputPropertiesMapping() {
  return {
    disabled: { property: 'disabled' },
    message: 'message'
  };
}

export function inputChildProperties() {
  return {
    type: { type: 'string', required: false, default: 'text' },
    name: { type: 'string', required: true },
    placeholder: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    customProperties: { type: 'array', required: false }
  };
}

export function inputChildPropertiesMapping() {
  return {
    disabled: { property: 'disabled' },
    message: 'message'
  };
}

export function inputVariants() {
  return {};
}
