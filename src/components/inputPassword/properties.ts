import { baseInteraction, commonProperties, commonPropertiesMapping, iconProperties } from '../default/properties';

export function inputPasswordProperties() {
  return {
    labelText: { type: 'string', required: false, default: 'InputPassword Text' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    placeholder: { type: 'string', required: false, default: '' },
    error: { type: 'string', required: false },
    defaultValue: { type: 'string', required: false, default: 'igrpsecret' },
    helperText: { type: 'string', required: false, default: '' },
    showPasswordToggle: { type: 'boolean', required: false, default: true },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function inputPasswordPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputPasswordChildProperties() {
  return {};
}

export function inputPasswordChildPropertiesMapping() {
  return {};
}

export function inputPasswordInteractions() {
  return {
    value: { ...baseInteraction, required: true, default: 'value' },
    onChange: { ...baseInteraction, required: true, default: '(e) => set{{id}}Value(e)' },
    onKeyDown: { ...baseInteraction, required: false, default: `(e) => { if(e.key === 'Enter') handle{{id}}(e); }` },
  };
}

export function inputPasswordInteractionsMapping() {
  return {

  };
}


export function inputPasswordVariants() {
  return {};
}
