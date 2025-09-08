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

export function inputHiddenProperties() {
  return {
    value: { type: 'string', required: false, default: '' },
    label: { type: 'string', required: false, default: 'Hidden' },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    inputClassName: { type: 'string', required: false },
    className: { type: 'string', required: false },
    ...dataCommonProperties(),
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

export function inputHiddenInteractions() {
  return {
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE, undefined, onChangeInteractionFieldVisibility()), required: false },
    onKeyDown: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_KEY_DOWN), required: false },
  };
}

export function inputHiddenData() {
  return {
    //value: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.VALUE), required: true },
  };
}

export function inputHiddenVariants() {
  return {};
}

export function inputHiddenStyle() {
  return {
    ...baseStyle()
  }
}

export function inputHiddenRules() {
  return {
    ...baseRules()
  }
}