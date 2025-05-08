import {
  baseInteraction,
  commonProperties,
  commonPropertiesMapping,
  inputCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function inputPasswordProperties() {
  return {
    labelText: { type: 'string', required: false, default: 'InputPassword Text' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    name: { type: 'string', required: true, default: 'password' },
    placeholder: { type: 'string', required: false, default: '' },
    error: { type: 'string', required: false },
    defaultValue: { type: 'string', required: false, default: 'igrpsecret' },
    helperText: { type: 'string', required: false, default: '' },
    showPasswordToggle: { type: 'boolean', required: false, default: true },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    className: { type: 'string', required: false },
    ...inputCommonProperties(),
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
    value: { ...baseInteraction(INTERACTIONS_DEFAULTS.NULLABLE, INTERACTIONS_TYPES.VALUE), required: true },
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE), required: true },
    onKeyDown: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_KEY_DOWN), required: false },
  };
}

export function inputPasswordInteractionsMapping() {
  return {

  };
}


export function inputPasswordVariants() {
  return {};
}
