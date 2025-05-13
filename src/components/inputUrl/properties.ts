import {
  baseInteraction,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
  inputCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

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
    name: { type: 'string', required: true, default: 'url' },
    label: { type: 'string', required: false, default: 'Input URL' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    helperText: { type: 'string', required: false, default: '' },
    defaultValue: { type: 'string', required: false, default: '' },
    defaultProtocol: { type: 'string', required: false, enum: protocols, default: 'https://' },
    protocols: { type: 'array', required: false, items: { type: 'string', required: false, enum: protocols }},
    error: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    className: { type: 'string', required: false },
    ...inputCommonProperties(),
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
    value: { ...baseInteraction(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.VALUE), required: true },
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE), required: true },
    onKeyDown: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_KEY_DOWN), required: false },
  };
}

export function inputUrlInteractionsMapping() {
  return {

  };
}


export function inputUrlVariants() {
  return {};
}
