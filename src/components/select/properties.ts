import { CommonProperties } from '../../interfaces/types';

export function selectProperties() {
  return {
    labelText: { type: 'string', required: false },
    floatingLabel: { type: 'string', required: false },
    placeholder: { type: 'string', required: false },
    helperText: { type: 'string', required: false },
    width: { type: 'string', required: false },
    options: { type: 'array', items: { value: { type: 'string', required: true }, label: { type: 'string', required: true },
        color: { type: 'string', required: false } }, required: true }, // Array of objects with value and label
    disabled: { type: 'boolean', required: false },
    required: { type: 'boolean', required: true },
    message: { type: 'string', required: false },
    className: { type: 'string', required: false }
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
