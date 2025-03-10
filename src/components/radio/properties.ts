import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function radioGroupProperties() {
  return {
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    options: { type: 'array', required: true }, // Array of objects with value and label
    description: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    message: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function radioGroupPropertiesMapping() {
  return {
    name: 'name',
    label: 'label',
    options: 'options',
    description: 'description',
    disabled: 'disabled',
    message: 'message',
    ...commonPropertiesMapping(),
  };
}

export function radioGroupChildProperties() {
  return {

  };
}

export function radioGroupChildPropertiesMapping() {
  return {

  };
}

export function radioGroupVariants() {
  return {};
}
