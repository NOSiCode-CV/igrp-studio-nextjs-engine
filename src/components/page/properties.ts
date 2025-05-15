import { baseInteraction, commonProperties, commonPropertiesMapping } from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function pageProperties() {
  return {
    variant: { type: 'string', required: true, enum: ['default', 'narrow', 'wide'] },
    ...commonProperties(),
  }
}

export function pagePropertiesMapping() {
  return {

    ...commonPropertiesMapping()
  }
}

export function pageChildProperties() {
  return {}
}

export function pageChildPropertiesMapping() {
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

export function pageInteractions() {
  return {
    onLoad: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_LOAD, undefined, onLoadInteractionFieldVisibility()), required: true },
  };
}

export function pageVariants() {
  return {
    default: 'mx-auto px-4',
    narrow: 'mx-auto px-4 max-w-4xl',
    wide: 'mx-auto px-4 max-w-7xl',
  }
}