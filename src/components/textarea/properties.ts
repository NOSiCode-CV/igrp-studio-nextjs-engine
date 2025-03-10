import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function textareaProperties() {
  return {
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    placeholder: { type: 'string', required: false },
    rows: { type: 'number', required: false },
    cols: { type: 'number', required: false },
    description: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    message: { type: 'string', required: false },
    ...commonProperties()
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
    message: 'message',
    ...commonPropertiesMapping()
  };
}

export function textareaChildProperties() {
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

export function textareaChildPropertiesMapping() {
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
