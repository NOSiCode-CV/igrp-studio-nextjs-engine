import { CommonProperties } from '../../interfaces/types';

export function datePickerProperties() {
  return {
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    placeholder: { type: 'string', required: false },
    description: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    message: { type: 'string', required: false }
  };
}

export function datePickerPropertiesMapping() {
  return {
    name: 'name',
    label: 'label',
    placeholder: 'placeholder',
    description: 'description',
    disabled: 'disabled',
    message: 'message'
  };
}

export function datePickerChildProperties() {
  return {
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    placeholder: { type: 'string', required: false },
    description: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    message: { type: 'string', required: false }
  };
}

export function datePickerChildPropertiesMapping() {
  return {
    name: 'name',
    label: 'label',
    placeholder: 'placeholder',
    description: 'description',
    disabled: 'disabled',
    message: 'message'
  };
}


export function datePickerVariants() {
  return {};
}
