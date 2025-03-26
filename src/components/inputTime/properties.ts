import { baseInteraction, commonProperties, commonPropertiesMapping, iconProperties } from '../default/properties';

export function inputTimeProperties() {
  return {
    labelText: { type: 'string', required: false, default: 'InputTime Text' },
    floatingLabel: { type: 'boolean', required: false, default: false },
    helperText: { type: 'string', required: false, default: '' },
    defaultValue: { type: 'string', required: false, default: '' },
    error: { type: 'string', required: false, default: 'Invalid text format' },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function inputTimePropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputTimeChildProperties() {
  return {};
}

export function inputTimeChildPropertiesMapping() {
  return {};
}

export function inputTimeInteractions() {
  return {
    value: { ...baseInteraction, required: true, default: 'value' },
    onChange: { ...baseInteraction, required: true, default: '(e) => set{{id}}Value(e)' },
    onKeyDown: { ...baseInteraction, required: false, default: `(e) => { if(e.key === 'Enter') handle{{id}}(e); }` },
  };
}

export function inputTimeInteractionsMapping() {
  return {

  };
}


export function inputTimeVariants() {
  return {};
}
