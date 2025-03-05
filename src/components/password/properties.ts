import { CommonProperties } from '../../interfaces/types';

export function passwordProperties() {
  return {
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    placeholder: { type: 'string', required: false },
    description: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    message: { type: 'string', required: false }
  };
}

export function passwordPropertiesMapping() {
  return {
    name: 'name',
    label: 'label',
    placeholder: 'placeholder',
    description: 'description',
    disabled: 'disabled',
    message: 'message'
  };
}

export function passwordVariants() {
  return {};
}
