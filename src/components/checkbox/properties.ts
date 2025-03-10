import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function checkboxProperties() {
  return {
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    description: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    message: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function checkboxPropertiesMapping() {
  return {
    name: 'name',
    label: 'label',
    description: 'description',
    disabled: 'disabled',
    message: 'message',
    ...commonPropertiesMapping(),
  };
}

export function checkboxChildProperties() {
  return {

  };
}

export function checkboxChildPropertiesMapping() {
  return {

  };
}

export function checkboxVariants() {
  return {};
}
