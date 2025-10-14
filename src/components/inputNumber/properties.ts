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

export function inputNumberProperties() {
  return {
    value: { type: 'string', required: false, default: '' },
    label: { type: 'string', required: false, default: 'Input Number' },
    description: { type: 'string', required: false },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    name: { type: 'string', required: true, default: 'number' },
    errorMessage: { type: 'string', required: false },
    defaultValue: { type: 'string', required: false, default: 0 },
    //helperText: { type: 'string', required: false, default: '' },
    formatOptions: { type: 'string', required: false, default: '' },
    min: { type: 'number', required: false, default: 0 },
    max: { type: 'number', required: false, default: 9999999 },
    step: { type: 'number', required: false, default: 1 },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    className: { type: 'string', required: false },
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function inputNumberPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputNumberChildProperties() {
  return {};
}

export function inputNumberChildPropertiesMapping() {
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

export function inputNumberInteractions() {
  return {
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE, undefined, onChangeInteractionFieldVisibility()), required: false },
  };
}

export function inputNumberInteractionsMapping() {
  return {};
}

export function inputNumberData() {
  return {
    //value: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.VALUE), required: true },
  };
}

export function inputNumberVariants() {
  return {};
}

export function inputNumberStyle() {
  return {
    ...baseStyle()
  }
}

export function inputNumberRules() {
  return {
    ...baseRules()
  }
}