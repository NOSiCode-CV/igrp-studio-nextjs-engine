import {
  baseInteraction, baseRules,
  baseStyle, classProperties,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { buttonProperties } from '../button/properties';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function alertDialogProperties() {
  return {
    variant: { type: 'string', required: true, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    title: { type: 'string', required: false, default: 'Alert Dialog' },
    description: { type: 'string', required: false, default: 'A alert dialog' },
    type: { type: 'string', required: false, enum: ['default', 'alert', 'confirm', 'delete', 'info', 'success', 'warning', 'alert'], default: 'default' },
    size: { type: 'string', required: false, enum: ['sm', 'md', 'lg', 'xl', 'full'], default: 'md' },
    titleClassName: { type: 'string', required: false },
    descriptionClassName: { type: 'string', required: false },
    showCancel: { type: 'boolean', required: false, default: true },
    ...iconProperties(),
    footerClassName: { type: 'string', required: false },
    cancelLabel: { type: 'string', required: false, default: 'Cancel' },
    actionLabel: { type: 'string', required: false, default: 'Confirm' },
    open: { type: 'boolean', required: false },
    actionProps: { type: 'object', required: false, properties: buttonProperties() },
    cancelProps: { type: 'object', required: false, properties: buttonProperties() },    showIcon: { type: 'boolean', required: false, default: true },
    iconName: { type: 'string', required: false, 'x-ui-widget': 'icon' },
    iconPlacement: { type: 'string', required: false, enum: ['start', 'end'] },

    ...classProperties(),
    ...commonProperties(),
  };
}

export function alertDialogPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function alertDialogChildProperties() {
  return {};
}

export function alertDialogChildPropertiesMapping() {
  return {};
}

export function alertDialogVariants() {
  return {};
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

export function alertDialogInteractions() {
  return {
    onOpenChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_OPEN, undefined, onClickInteractionFieldVisibility()), required: false },
    onCancel: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CANCEL, undefined, onClickInteractionFieldVisibility()), required: false },
    onAction: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_ACTION, undefined, onClickInteractionFieldVisibility()), required: false },
  };
}

export function alertDialogInteractionsMapping() {
  return {

  };
}

export function alertDialogStyle() {
  return {
    ...baseStyle()
  }
}

export function alertDialogRules() {
  return {
    ...baseRules()
  }
}
