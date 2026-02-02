import {
  baseInteraction,
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { InteractionFieldVisibility } from '../../interfaces/types';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function pageHeaderProperties() {
  return {
    title: { type: 'string', required: true, default: 'Page Title' },
    description: { type: 'string', required: false, default: 'Page Description' },
    variant: {
      type: 'string',
      required: false,
      enum: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      default: 'h3',
    },
    headlineClassName: { type: 'string', required: false },
    isSticky: { type: 'boolean', required: false },
    showBackButton: { type: 'boolean', required: false, default: false },
    urlBackButton: { type: 'string', required: false, default: '', 'x-ui-widget': 'uri' },
    backButtonVariant: {
      type: 'string',
      required: false,
      default: 'default',
      enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
    },
    backButtonSize: {
      type: 'string',
      required: false,
      default: 'default',
      enum: ['default', 'sm', 'lg', 'icon'],
    },
    backButtonAriaLabel: { type: 'string', required: false },
    backButtonShowText: { type: 'boolean', required: false, default: false },
    backButtonText: { type: 'string', required: false },
    backButtonClassName: { type: 'string', required: false },
    backButtonUseBrowserBack: { type: 'boolean', required: false, default: false },
    iconProperties: {
      type: 'object',
      properties: {
        iconBackButton: {
          type: 'string',
          required: false,
          default: 'ArrowLeft',
          'x-ui-widget': 'icon',
          'x-meta': { label: 'Back Button Icon' },
        },
      },
    },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function pageHeaderPropertiesMapping() {
  return {
    title: { property: 'title' },
    description: { property: 'description' },
    ...commonPropertiesMapping(),
  };
}

export function pageHeaderChildProperties() {
  return {

  };
}

export function pageHeaderChildPropertiesMapping() {
  return {

  };
}


export function pageHeaderVariants() {
  return {
    default: ''
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

export function pageHeaderInteractions() {
  return {
    backButtonOnClick: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CLICK_BACK_BUTTON, undefined, onClickInteractionFieldVisibility()), required: false },
  };
}

export function pageHeaderStyle() {
  return {
    ...baseStyle()
  }
}

export function pageHeaderRules() {
  return {
    ...baseRules()
  }
}
