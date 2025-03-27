import { baseInteraction, commonProperties, commonPropertiesMapping, iconProperties } from '../default/properties';

export function inputFileProperties() {
  return {
    labelText: { type: 'string', required: false, default: 'InputFile Text' },
    floatingLabel: { type: 'boolean', required: false, default: false },
    name: { type: 'string', required: false, default: '' },
    error: { type: 'string', required: false },
    accept: { type: 'string', required: false, default: 'application/pdf' },
    customId: { type: 'string', required: false, default: '{{id}}' },
    helperText: { type: 'string', required: false, default: '' },
    multiple: { type: 'boolean', required: false, default: false },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function inputFilePropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputFileChildProperties() {
  return {};
}

export function inputFileChildPropertiesMapping() {
  return {};
}

export function inputFileInteractions() {
  return {
    value: { ...baseInteraction, required: true, default: 'value' },
    onChange: { ...baseInteraction, required: true, default: '(e) => set{{id}}Value(e)' },
  };
}

export function inputFileInteractionsMapping() {
  return {};
}

export function checkboxInteractionsMapping() {
  return {

  };
}


export function inputFileVariants() {
  return {};
}
