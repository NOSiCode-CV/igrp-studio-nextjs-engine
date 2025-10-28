import {
  baseInteraction,
  baseRules,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../../../default/properties';
import { actionProperties, actionPropertiesMapping } from '../tableColumns/properties';
import { InteractionFieldVisibility } from '../../../../interfaces/types';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../../../utils/constants';

export function tableAlertActionProperties() {
  return {
    ...actionProperties('Alert'),
    title: { type: 'string', required: false, default: 'New Alert' },
    content: { type: 'string', required: false },
    showCancel: { type: 'boolean', required: false, default: true },
    labelCancel: { type: 'string', required: false, default: 'Cancel' },
    classNameCancel: { type: 'string', required: false },
    variantCancel: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    showConfirm: { type: 'boolean', required: false, default: true },
    labelConfirm: { type: 'string', required: false, default: 'Confirm' },
    classNameConfirm: { type: 'string', required: false },
    variantConfirm: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function tableAlertActionPropertiesMapping() {
  return {
    ...actionPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableAlertActionChildProperties() {
  return {

  };
}

export function tableAlertActionChildPropertiesMapping() {
  return {

  };
}

function onClickConfirmInteractionFieldVisibility(): InteractionFieldVisibility {
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

export function tableAlertActionInteractions() {
  return {
    onClickConfirm: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_WITH_EVENT, INTERACTIONS_TYPES.ON_CLICK_CONFIRM, undefined, onClickConfirmInteractionFieldVisibility()), required: true },
  };
}

export function tableAlertActionInteractionsMapping() {
  return {

  };
}


export function tableAlertActionVariants() {
  return {
    default: ''
  };
}

export function tableAlertActionRules() {
  return {
    ...baseRules()
  }
}