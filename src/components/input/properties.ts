import {
  baseInteraction,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
  inputCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

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
    ...inputCommonProperties(),
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
    value: { ...baseInteraction(INTERACTIONS_DEFAULTS.NULLABLE, INTERACTIONS_TYPES.VALUE), required: true },
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE), required: true },
    onKeyDown: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_KEY_DOWN), required: false },
  };
}

export function inputInteractionsMapping() {
  return {

  };
}


export function inputVariants() {
  return {};
}
