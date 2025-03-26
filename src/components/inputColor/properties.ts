import { baseInteraction, commonProperties, commonPropertiesMapping, iconProperties } from '../default/properties';

export function inputColorProperties() {
  return {
    labelText: { type: 'string', required: false, default: 'InputColor Text' },
    floatingLabel: { type: 'boolean', required: false, default: false },
    name: { type: 'string', required: false, default: '' },
    error: { type: 'string', required: false, default: '' },
    defaultValue: { type: 'string', required: false, default: '#000000' },
    helperText: { type: 'string', required: false, default: '' },
    showHexValue: { type: 'boolean', required: false, default: true },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function inputColorPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputColorChildProperties() {
  return {};
}

export function inputColorChildPropertiesMapping() {
  return {};
}

export function inputColorInteractions() {
  return {
    value: { ...baseInteraction, required: true, default: 'value' },
    onChange: { ...baseInteraction, required: true, default: '(e) => set{{id}}Value(e)' },
  };
}

export function inputColorInteractionsMapping() {
  return {};
}

export function checkboxInteractionsMapping() {
  return {

  };
}


export function inputColorVariants() {
  return {};
}
