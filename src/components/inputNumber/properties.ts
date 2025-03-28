import { baseInteraction, commonProperties, commonPropertiesMapping, iconProperties } from '../default/properties';

export function inputNumberProperties() {
  return {
    label: { type: 'string', required: false, default: 'InputNumber Text' },
    description: { type: 'string', required: false, default: 'A number input text' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    name: { type: 'string', required: false, default: '' },
    errorMessage: { type: 'string', required: false },
    defaultValue: { type: 'string', required: false, default: 0 },
    //helperText: { type: 'string', required: false, default: '' },
    formatOptions: { type: 'string', required: false, default: '' },
    min: { type: 'number', required: false, default: 0 },
    max: { type: 'number', required: false, default: 9999999 },
    step: { type: 'number', required: false, default: 1 },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function inputNumberPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputNumberChildProperties() {
  return {};
}

export function inputNumberChildPropertiesMapping() {
  return {};
}

export function inputNumberInteractions() {
  return {
    value: { ...baseInteraction, required: true, default: 'value' },
    onChange: { ...baseInteraction, required: true, default: '(e) => set{{id}}Value(e)' },
  };
}

export function inputNumberInteractionsMapping() {
  return {};
}

export function checkboxInteractionsMapping() {
  return {

  };
}


export function inputNumberVariants() {
  return {};
}
