import {
  baseInteraction, baseRules,
  baseStyle, classProperties,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function buttonProperties() {
  return {
    content: { type: 'string', required: true, default: 'Button' },
    variant: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    size: { type: 'string', required: false, default: 'default', enum: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'] },
    ...iconProperties(),
    iconClassName: { type: 'string', required: false },
    loading: { type: 'boolean', required: false, default: false },
    loadingText: { type: 'string', required: false },
    asChild: { type: 'boolean', required: false, default: false },
    type: { type: 'string', required: false, default: 'button', enum: ['button', 'submit', 'reset'] },
    ariaLabel: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false, default: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function buttonPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}


export function buttonChildProperties() {
  return {};
}

export function buttonChildPropertiesMapping() {
  return {};
}

export function buttonVariants() {
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

export function buttonInteractions() {
  return {
    onClick: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CLICK, undefined, onClickInteractionFieldVisibility()), required: true },
    onMouseOver: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_HOVER, undefined, onClickInteractionFieldVisibility()), required: false },
    onMouseDown: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_DOWN, undefined, onClickInteractionFieldVisibility()), required: false },
    onMouseLeave: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_LEAVE, undefined, onClickInteractionFieldVisibility()), required: false },
  };
}

export function buttonInteractionsMapping() {
  return {

  };
}

export function buttonStyle() {
  return {
    ...baseStyle()
  }
}

export function buttonRules() {
  return {
    ...baseRules()
  }
}