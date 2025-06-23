import {
  baseInteraction, baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
} from '../../../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../../../utils/constants';
import { InteractionFieldVisibility } from '../../../../interfaces/types';

export function modalDialogCloseProperties() {
  return {
    content: { type: 'string', required: true, default: 'Close' },
    variant: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    size: { type: 'string', required: false, default: 'default', enum: ['default', 'sm', 'lg', 'icon'] },
    ...iconProperties(),
    disabled: { type: 'boolean', required: false, default: false },
    className: { type: 'string', required: false },
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