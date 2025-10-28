import {
  baseData,
  baseInteraction,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
  dataCommonProperties, baseStyle, baseRules, classProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

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
    ...classProperties(),
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

function onChangeInteractionFieldVisibility(): InteractionFieldVisibility {
  return {
    fnName: { visible: true },
    actionName: { visible: false },
    fnCustomSet: { visible: true },
    fnCustomCode: {
      imports: { visible: true },
      states: { visible: false },
      fnCode: { visible: false },
      actionCode: { visible: false }
    },
  }
}

export function inputInteractions() {
  return {
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE, undefined, onChangeInteractionFieldVisibility()), required: false },
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