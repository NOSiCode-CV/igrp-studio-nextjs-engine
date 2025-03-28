import { baseInteraction, commonProperties, commonPropertiesMapping, iconProperties } from '../default/properties';

export function inputUrlProperties() {

  const protocols = [
    'https://',
    'http://',
    'ftp://',
    'sftp://',
    'ws://',
    'wss://',
  ]

  return {
    labelText: { type: 'string', required: false, default: 'InputUrl Text' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    helperText: { type: 'string', required: false, default: '' },
    defaultValue: { type: 'string', required: false, default: '' },
    defaultProtocol: { type: 'string', required: false, enum: protocols, default: 'https://' },
    protocols: { type: 'array', required: false, items: { type: 'string', required: false, enum: protocols }},
    error: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function inputUrlPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputUrlChildProperties() {
  return {};
}

export function inputUrlChildPropertiesMapping() {
  return {};
}

export function inputUrlInteractions() {
  return {
    value: { ...baseInteraction, required: true, default: 'value' },
    onChange: { ...baseInteraction, required: true, default: '(e) => set{{id}}Value(e)' },
    onKeyDown: { ...baseInteraction, required: false, default: `(e) => { if(e.key === 'Enter') handle{{id}}(e); }` },
  };
}

export function inputUrlInteractionsMapping() {
  return {

  };
}


export function inputUrlVariants() {
  return {};
}
