import {
  baseInteraction,
  baseRules,
  baseStyle, classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function componentProperties() {
  return {
    ...classProperties(),
    ...commonProperties(),
  }
}

export function componentPropertiesMapping() {
  return {

    ...commonPropertiesMapping()
  }
}

export function componentChildProperties() {
  return {}
}

export function componentChildPropertiesMapping() {
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

export function componentInteractions() {
  return {
    onLoad: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_LOAD, undefined, onLoadInteractionFieldVisibility()), required: true },
  };
}

export function componentVariants() {
  return {
  }
}

export function componentStyle() {
  return {
    ...baseStyle()
  }
}

export function componentRules() {
  return {
    ...baseRules()
  }
}
