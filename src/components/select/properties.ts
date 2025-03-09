import { CommonProperties } from '../../interfaces/types';

export function selectProperties() {
  return {
    labelText: { type: 'string', required: true },
    placeholder: { type: 'string', required: false },
    helperText: { type: 'string', required: false },
    width: { type: 'string', required: false },
    options: { type: 'array', items: { value: 'string', label: 'string' }, required: true }, // Array of objects with value and label
    optionsLabel: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    required: { type: 'boolean', required: true },
    message: { type: 'string', required: false }
  };
}

export function selectPropertiesMapping() {
  return {};
}

export function selectChildProperties() {
  return {};
}

export function selectChildPropertiesMapping() {
  return {};
}

export function selectVariants() {
  return {};
}
