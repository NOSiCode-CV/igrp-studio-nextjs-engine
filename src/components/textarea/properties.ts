import { CommonProperties } from '../../interfaces/types';

export function textareaProperties() {
  return {
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    placeholder: { type: 'string', required: false },
    rows: { type: 'number', required: false },
    cols: { type: 'number', required: false },
    description: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    message: { type: 'string', required: false }
  };
}

export function textareaPropertiesMapping() {
  return {
    name: 'name',
    label: 'label',
    placeholder: 'placeholder',
    rows: 'rows',
    cols: 'cols',
    description: 'description',
    disabled: 'disabled',
    message: 'message'
  };
}

export function textareaVariants() {
  return {};
}
