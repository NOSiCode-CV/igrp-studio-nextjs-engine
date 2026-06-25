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

export function inputTextProperties() {
  return {
    value: { type: 'string', required: false },
    label: { type: 'string', required: false, default: 'Input Text' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    placeholder: { type: 'string', required: false, default: '' },
    helperText: { type: 'string', required: false, default: '' },
    minLength: { type: 'number', required: false },
    maxLength: { type: 'number', required: false },
    ...iconProperties(),
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },    type: { type: 'string', required: false, default: 'text', enum: ['text', 'email', 'tel', 'search', 'url'] },
    iconSize: { type: 'string', required: false, enum: ['xs', 'sm', 'md', 'lg'] },
    iconClassName: { type: 'string', required: false },
    error: { type: 'string', required: false },
    labelClassName: { type: 'string', required: false },
    inputClassName: { type: 'string', required: false },

    ...classProperties(),
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function inputTextPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputTextChildProperties() {
  return {};
}

export function inputTextChildPropertiesMapping() {
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

export function inputTextInteractions() {
  return {
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE, undefined, onChangeInteractionFieldVisibility()), required: false },
    onKeyDown: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_KEY_DOWN), required: false },
  };
}

export function inputTextData() {
  return {
    //value: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.VALUE), required: true },
  };
}

export function inputTextVariants() {
  return {};
}

export function inputTextStyle() {
  return {
    ...baseStyle()
  }
}

export function inputTextRules() {
  return {
    ...baseRules()
  }
}