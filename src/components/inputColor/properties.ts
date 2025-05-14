import {
  baseData,
  baseInteraction,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
  inputCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function inputColorProperties() {
  return {
    label: { type: 'string', required: false, default: 'Input Color' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    name: { type: 'string', required: true, default: 'color' },
    error: { type: 'string', required: false },
    defaultValue: { type: 'string', required: false, default: '#000000' },
    helperText: { type: 'string', required: false, default: '' },
    showHexValue: { type: 'boolean', required: false, default: true },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    className: { type: 'string', required: false },
    ...inputCommonProperties(),
    ...commonProperties(),
  };
}

export function inputColorPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputColorChildProperties() {
  return {};
}

export function inputColorChildPropertiesMapping() {
  return {};
}

export function inputColorInteractions() {
  return {
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE), required: true, default: '(e) => set{{id}}Value(e)' },
  };
}

export function inputColorInteractionsMapping() {
  return {};
}

export function inputColorData() {
  return {
    value: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.VALUE), required: true },
  };
}


export function checkboxInteractionsMapping() {
  return {

  };
}


export function inputColorVariants() {
  return {};
}
