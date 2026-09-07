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

export function switchProperties() {
  return {
    label: { type: 'string', required: false, default: 'Switch' },
    helperText: { type: 'string', required: false },
    required: { type: 'boolean', required: false },
    error: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    labelClassName: { type: 'string', required: false },
    ...classProperties(),
    ...dataCommonProperties(),
    ...commonProperties()
  };
}

export function switchPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function switchChildProperties() {
  return {
  };
}

export function switchChildPropertiesMapping() {
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

export function switchInteractions() {
  return {
    onCheckedChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHECK, undefined, onValueChangeInteractionFieldVisibility()), required: true },
  };
}

export function switchData() {
  return {
    checked: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.CHECKED), required: true },
  };
}

export function switchInteractionsMapping() {
  return {};
}

export function switchVariants() {
  return {};
}

export function switchStyle() {
  return {
    ...baseStyle()
  }
}

export function switchRules() {
  return {
    ...baseRules()
  }
}
