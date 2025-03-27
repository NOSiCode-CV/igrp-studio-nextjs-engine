import { baseInteraction, commonProperties, commonPropertiesMapping, iconProperties } from '../default/properties';

export function inputProperties() {
  return {
    type: { type: 'string', required: false, default: 'text', enum: [
        'text',
        'email',
        'password',
        'number',
        'tel',
        'url',
        'color'
      ] },
    labelText: { type: 'string', required: false, default: 'Input Text' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    placeholder: { type: 'string', required: false, default: '' },
    helperText: { type: 'string', required: false, default: '' },
    ...iconProperties(),
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    iconClassName: { type: 'string', required: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function inputPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputChildProperties() {
  return {};
}

export function inputChildPropertiesMapping() {
  return {};
}

export function inputInteractions() {
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


export function inputVariants() {
  return {};
}
