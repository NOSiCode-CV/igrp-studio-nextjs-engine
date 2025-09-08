import {
  baseInteraction, baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function modalDialogProperties() {
  return {
    open: { type: 'boolean', required: false },
    defaultOpen: { type: 'boolean', required: false },
    modal: { type: 'boolean', required: false },
    ...commonProperties(),
  };
}

export function modalDialogPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function modalDialogChildProperties() {
  return {};
}

export function modalDialogChildPropertiesMapping() {
  return {};
}

export function modalDialogVariants() {
  return {};
}

function onOpenChangeInteractionFieldVisibility(): InteractionFieldVisibility {
  return {
    fnName: { visible: true },
    actionName: { visible: false },
    fnCustomSet: { visible: true },
    fnCustomCode: {
      imports: { visible: false },
      states: { visible: false },
      fnCode: { visible: false },
      actionCode: { visible: false }
    },
  }
}

export function modalDialogInteractions() {
  return {
    onOpenChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_OPEN, undefined, onOpenChangeInteractionFieldVisibility() ), required: false },
  };
}

export function modalDialogInteractionsMapping() {
  return {

  };
}

export function modalDialogStyle() {
  return {
    ...baseStyle()
  }
}

export function modalDialogRules() {
  return {
    ...baseRules()
  }
}
