import { baseInteraction, commonProperties, commonPropertiesMapping, iconProperties } from '../default/properties';

export function inputTextareaProperties() {
  return {
    labelText: { type: 'string', required: false, default: 'InputTextarea Text' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    helperText: { type: 'string', required: false, default: '' },
    error: { type: 'string', required: false },
    rows: { type: 'number', required: false, default: 3 },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function inputTextareaPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputTextareaChildProperties() {
  return {};
}

export function inputTextareaChildPropertiesMapping() {
  return {};
}

export function inputTextareaInteractions() {
  return {
    value: { ...baseInteraction, required: true, default: 'value' },
    onChange: { ...baseInteraction, required: true, default: '(e) => set{{id}}Value(e)' },
    onKeyDown: { ...baseInteraction, required: false, default: `(e) => { if(e.key === 'Enter') handle{{id}}(e); }` },
  };
}

export function inputTextareaInteractionsMapping() {
  return {

  };
}


export function inputTextareaVariants() {
  return {};
}
