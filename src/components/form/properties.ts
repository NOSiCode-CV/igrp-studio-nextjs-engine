import { CommonProperties } from '../../interfaces/types';

export function formProperties() {
  return {
    control: { type: 'string', required: true },
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    description: { type: 'string', required: false },
    message: { type: 'string', required: false },
  };
}

export function formPropertiesMapping() {
  return {
    control: 'control',
    name: 'name',
    label: 'label',
    description: 'description',
    message: 'message',
  };
}

export function formVariants() {
  return {};
}