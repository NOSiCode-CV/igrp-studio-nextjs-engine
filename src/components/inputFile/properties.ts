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

export function inputFileProperties() {
  return {
    value: { type: 'string', required: false, default: '' },
    label: { type: 'string', required: false, default: 'Input File' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    error: { type: 'string', required: false },
    accept: { type: 'string', required: false, default: 'application/pdf' },
    //customId: { type: 'string', required: false, default: '{{id}}' },
    //helperText: { type: 'string', required: false, default: '' },
    multiple: { type: 'boolean', required: false, default: false },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    className: { type: 'string', required: false },
    ...dataCommonProperties(),
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

export function inputFileInteractions() {
  return {
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE, undefined, onChangeInteractionFieldVisibility()), required: false },
  };
}

export function inputFileInteractionsMapping() {
  return {};
}

export function inputFileData() {
  return {
    //value: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.VALUE), required: true },
  };
}

export function inputFileVariants() {
  return {};
}

export function inputFileStyle() {
  return {
    ...baseStyle()
  }
}

export function inputFileRules() {
  return {
    ...baseRules()
  }
}