import { baseInteraction, baseRules, commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { actionProperties, actionPropertiesMapping } from '../tableColumns/properties';
import { InteractionFieldVisibility } from '../../../../interfaces/types';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../../../utils/constants';

export function tableLinkActionProperties() {
  return {
    ...actionProperties('Link'),
    href: { type: 'string', required: false, default: 'https://www.igrp.cv/', 'x-ui-widget': 'uri' },
    ...commonProperties(),
  };
}

export function tableLinkActionPropertiesMapping() {
  return {
    ...actionPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableLinkActionChildProperties() {
  return {

  };
}

export function tableLinkActionChildPropertiesMapping() {
  return {

  };
}

function actionInteractionFieldVisibility(): InteractionFieldVisibility {
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

export function tableLinkActionInteractions() {
  return {
    action: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ACTION, undefined, actionInteractionFieldVisibility()), required: true },
  };
}

export function tableLinkActionInteractionsMapping() {
  return {

  };
}

export function tableLinkActionVariants() {
  return {
    default: ''
  };
}

export function tableLinkActionRules() {
  return {
    ...baseRules()
  }
}