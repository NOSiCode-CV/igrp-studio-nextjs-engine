import {
  baseInteraction, baseRules,
  baseStyle, classProperties,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
} from '../../../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../../../utils/constants';
import { InteractionFieldVisibility } from '../../../../interfaces/types';

export function modalDialogCloseProperties() {
  return {
    content: { type: 'string', required: true, default: 'Close' },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function modalDialogClosePropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function modalDialogCloseChildProperties() {
  return {};
}

export function modalDialogCloseChildPropertiesMapping() {
  return {};
}

export function modalDialogCloseVariants() {
  return {
  };
}

function onClickInteractionFieldVisibility(): InteractionFieldVisibility {
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

export function modalDialogCloseInteractions() {
  return {
    onClick: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CLICK, undefined, onClickInteractionFieldVisibility()), required: true },
  };
}

export function modalDialogCloseInteractionsMapping() {
  return {

  };
}

export function modalDialogCloseStyle() {
  return {
    ...baseStyle()
  }
}

export function modalDialogCloseRules() {
  return {
    ...baseRules()
  }
}