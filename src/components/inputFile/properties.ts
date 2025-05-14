import {
  baseInteraction,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
  inputCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function inputFileProperties() {
  return {
    label: { type: 'string', required: false, default: 'Input File' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    name: { type: 'string', required: true, default: 'file' },
    error: { type: 'string', required: false },
    accept: { type: 'string', required: false, default: 'application/pdf' },
    //customId: { type: 'string', required: false, default: '{{id}}' },
    //helperText: { type: 'string', required: false, default: '' },
    multiple: { type: 'boolean', required: false, default: false },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    className: { type: 'string', required: false },
    ...inputCommonProperties(),
    ...commonProperties(),
  };
}

export function inputFilePropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputFileChildProperties() {
  return {};
}

export function inputFileChildPropertiesMapping() {
  return {};
}

export function inputFileInteractions() {
  return {
    value: { ...baseInteraction(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.VALUE), required: true },
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE), required: true },
  };
}

export function inputFileInteractionsMapping() {
  return {};
}

export function checkboxInteractionsMapping() {
  return {

  };
}


export function inputFileVariants() {
  return {};
}
