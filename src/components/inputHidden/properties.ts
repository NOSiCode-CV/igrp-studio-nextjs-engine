import {
  baseInteraction,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
  inputCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function inputHiddenProperties() {
  return {
    name: { type: 'string', required: true, default: 'hidden' },
    label: { type: 'string', required: false, default: 'Hidden' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    helperText: { type: 'string', required: false, default: '' },
    ...iconProperties(),
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    inputClassName: { type: 'string', required: false },
    labelClassName: { type: 'string', required: false },
    className: { type: 'string', required: false },
    ref: { type: 'string', required: false },
    ...inputCommonProperties(),
    ...commonProperties(),
  };
}

export function inputHiddenPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputHiddenChildProperties() {
  return {};
}

export function inputHiddenChildPropertiesMapping() {
  return {};
}

export function inputHiddenInteractions() {
  return {
    value: { ...baseInteraction(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.VALUE), required: true },
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE), required: true },
    onKeyDown: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_KEY_DOWN), required: false },
  };
}

export function checkboxInteractionsMapping() {
  return {

  };
}


export function inputHiddenVariants() {
  return {};
}
