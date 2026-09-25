import {
  baseData,
  baseInteraction,
  baseRules,
  baseStyle, classProperties,
  commonProperties,
  commonPropertiesMapping, dataCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function checkboxProperties() {
  return {
    label: { type: 'string', required: false, default: 'Check' },
    disabled: { type: 'boolean', required: false },
    helperText: { type: 'string', required: false },
    labelClassName: { type: 'string', required: false },
    error: { type: 'string', required: false },
    required: { type: 'boolean', required: false, default: false },

    ...classProperties(),
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function checkboxPropertiesMapping() {
  return {
    label: 'label',
    disabled: 'disabled',
    ...commonPropertiesMapping(),
  };
}

export function checkboxChildProperties() {
  return {

  };
}

export function checkboxChildPropertiesMapping() {
  return {

  };
}

function onValueChangeInteractionFieldVisibility(): InteractionFieldVisibility {
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

export function checkboxInteractions() {
  return {
    onCheckedChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHECK, undefined, onValueChangeInteractionFieldVisibility()), required: true },
  };
}

export function checkboxInteractionsMapping() {
  return {

  };
}

export function checkboxData() {
  return {
    checked: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.CHECKED), required: true },
  };
}


export function checkboxVariants() {
  return {};
}

export function checkboxStyle() {
  return {
    ...baseStyle()
  }
}

export function checkboxRules() {
  return {
    ...baseRules()
  }
}
