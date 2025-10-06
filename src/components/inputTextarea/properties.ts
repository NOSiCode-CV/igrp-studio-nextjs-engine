import {
  baseData,
  baseInteraction,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
  dataCommonProperties, baseStyle, baseRules,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function inputTextareaProperties() {
  return {
    value: { type: 'string', required: false, default: '' },
    name: { type: 'string', required: true, default: 'textarea' },
    label: { type: 'string', required: false, default: 'Input Textarea' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    helperText: { type: 'string', required: false, default: '' },
    placeholder: { type: 'string', required: false, default: '' },
    minLength: { type: 'number', required: false },
    maxLength: { type: 'number', required: false },
    error: { type: 'string', required: false },
    rows: { type: 'number', required: false, default: 3 },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    className: { type: 'string', required: false },
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function inputTextareaPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputTextareaChildProperties() {
  return {};
}

export function inputTextareaChildPropertiesMapping() {
  return {};
}

function onChangeInteractionFieldVisibility(): InteractionFieldVisibility {
  return {
    fnName: { visible: true },
    actionName: { visible: false },
    fnCustomSet: { visible: true },
    fnCustomCode: {
      imports: { visible: false },
      states: { visible: false },
      fnCode: { visible: false },
      actionCode: { visible: false }
    },
  }
}

export function inputTextareaInteractions() {
  return {
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE, undefined, onChangeInteractionFieldVisibility()), required: false },
    onKeyDown: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_KEY_DOWN), required: false },
  };
}

export function inputTextareaInteractionsMapping() {
  return {

  };
}

export function inputTextareaData() {
  return {
    //value: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.VALUE), required: true },
  };
}

export function inputTextareaVariants() {
  return {};
}

export function inputTextareaStyle() {
  return {
    ...baseStyle()
  }
}

export function inputTextareaRules() {
  return {
    ...baseRules()
  }
}