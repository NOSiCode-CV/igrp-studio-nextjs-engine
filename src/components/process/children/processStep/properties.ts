import {
  baseInteraction,
  baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
} from '../../../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../../../utils/constants';
import { InteractionFieldVisibility } from '../../../../interfaces/types';

export function processStepProperties() {
  return {
    ...commonProperties(),
  }
}

export function processStepPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  }
}

export function processStepChildProperties() {
  return {}
}

export function processStepChildPropertiesMapping() {
  return {}
}

function onLoadInteractionFieldVisibility(): InteractionFieldVisibility {
  return {
    fnName: { visible: false },
    actionName: { visible: false },
    fnCustomSet: { visible: false },
    fnCustomCode: {
      imports: { visible: true },
      states: { visible: false },
      fnCode: { visible: true },
      actionCode: { visible: false }
    },
  }
}

export function processStepInteractions() {
  return {
    onLoad: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_LOAD, undefined, onLoadInteractionFieldVisibility()), required: true },
  };
}

export function processStepVariants() {
  return {}
}

export function processStepStyle() {
  return {
    ...baseStyle()
  }
}

export function processStepRules() {
  return {
    ...baseRules()
  }
}
