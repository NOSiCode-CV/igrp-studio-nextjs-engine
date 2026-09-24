import {
  baseInteraction, baseRules,
  baseStyle, classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../../../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../../../utils/constants';
import { InteractionFieldVisibility } from '../../../../interfaces/types';

export function modalDialogTriggerProperties() {
  return {
    ...classProperties(),
    ...commonProperties(),
  };
}

export function modalDialogTriggerPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function modalDialogTriggerChildProperties() {
  return {};
}

export function modalDialogTriggerChildPropertiesMapping() {
  return {};
}

export function modalDialogTriggerVariants() {
  return {
    default: "default",
    secondary: "secondary",
    destructive: "destructive",
    outline: "outline",
    ghost: "ghost",
    link: "link",
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

export function modalDialogTriggerInteractions() {
  return {
    onClick: {
      ...baseInteraction(
        INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT,
        INTERACTIONS_TYPES.ON_CLICK,
        undefined,
        onClickInteractionFieldVisibility(),
      ),
      required: true,
    },
    onMouseOver: {
      ...baseInteraction(
        INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT,
        INTERACTIONS_TYPES.ON_HOVER,
        undefined,
        onClickInteractionFieldVisibility(),
      ),
      required: false,
    },
    onMouseDown: {
      ...baseInteraction(
        INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT,
        INTERACTIONS_TYPES.ON_DOWN,
        undefined,
        onClickInteractionFieldVisibility(),
      ),
      required: false,
    },
    onMouseLeave: {
      ...baseInteraction(
        INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT,
        INTERACTIONS_TYPES.ON_LEAVE,
        undefined,
        onClickInteractionFieldVisibility(),
      ),
      required: false,
    },
  };
}

export function modalDialogTriggerInteractionsMapping() {
  return {

  };
}

export function modalDialogTriggerStyle() {
  return {
    ...baseStyle()
  }
}

export function modalDialogTriggerRules() {
  return {
    ...baseRules()
  }
}