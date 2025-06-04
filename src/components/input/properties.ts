import {
  baseData,
  baseInteraction,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
  dataCommonProperties, baseStyle, baseRules,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function inputProperties() {
  return {
    value: { type: 'string', required: false, default: '' },
    type: { type: 'string', required: false, default: 'text', enum: [
        'text',
        'email',
        'password',
        'number',
        'tel',
        'url',
        'color'
      ] },
    label: { type: 'string', required: false, default: 'Input Text' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    placeholder: { type: 'string', required: false, default: '' },
    helperText: { type: 'string', required: false, default: '' },
    ...iconProperties(),
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    iconClassName: { type: 'string', required: false },
    className: { type: 'string', required: false },
    ...dataCommonProperties(),
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
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE), required: true },
    onKeyDown: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_KEY_DOWN), required: false },
  };
}

export function inputInteractionsMapping() {
  return {

  };
}

export function inputData() {
  return {
    //value: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.VALUE), required: true },
  };
}


export function inputVariants() {
  return {};
}

export function inputStyle() {
  return {
    ...baseStyle()
  }
}

export function inputRules() {
  return {
    ...baseRules()
  }
}