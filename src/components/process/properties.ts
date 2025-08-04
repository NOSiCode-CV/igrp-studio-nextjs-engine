import {
  baseInteraction,
  baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function processProperties() {
  return {
    ...commonProperties(),
  }
}

export function processPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  }
}

export function processChildProperties() {
  return {}
}

export function processChildPropertiesMapping() {
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

export function processInteractions() {
  return {
    onLoad: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_LOAD, undefined, onLoadInteractionFieldVisibility()), required: true },
  };
}

export function processVariants() {
  return {}
}

export function processStyle() {
  return {
    ...baseStyle()
  }
}

export function processRules() {
  return {
    ...baseRules()
  }
}
