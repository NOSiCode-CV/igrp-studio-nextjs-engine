import { baseInteraction, commonProperties, commonPropertiesMapping, iconProperties } from '../default/properties';

export function inputTextProperties() {
  return {
    labelText: { type: 'string', required: false, default: 'InputText Text' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    placeholder: { type: 'string', required: false, default: '' },
    helperText: { type: 'string', required: false, default: '' },
    ...iconProperties(),
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function inputTextPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputTextChildProperties() {
  return {};
}

export function inputTextChildPropertiesMapping() {
  return {};
}

export function inputTextInteractions() {
  return {
    value: { ...baseInteraction, required: true, default: 'value' },
    onChange: { ...baseInteraction, required: true, default: '(e) => set{{id}}Value(e)' },
    onKeyDown: { ...baseInteraction, required: false, default: `(e) => { if(e.key === 'Enter') handle{{id}}(e); }` },
  };
}

export function checkboxInteractionsMapping() {
  return {

  };
}


export function inputTextVariants() {
  return {};
}
