import { baseInteraction, baseRules, commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { actionProperties, actionPropertiesMapping } from '../tableColumns/properties';
import { InteractionFieldVisibility } from '../../../../interfaces/types';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../../../utils/constants';

export function tableModalActionProperties() {
  return {
    ...actionProperties('Modal'),
    content: { type: 'string', required: false },
    modalTitle: { type: 'string', required: false, default: 'New Modal' },
    showCancel: { type: 'boolean', required: false, default: true },
    labelCancel: { type: 'string', required: false, default: 'Cancel' },
    classNameCancel: { type: 'string', required: false },
    variantCancel: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    showConfirm: { type: 'boolean', required: false, default: true },
    labelConfirm: { type: 'string', required: false, default: 'Confirm' },
    classNameConfirm: { type: 'string', required: false },
    variantConfirm: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    ...commonProperties(),
  };
}

export function tableModalActionPropertiesMapping() {
  return {
    ...actionPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableModalActionChildProperties() {
  return {

  };
}

export function tableModalActionChildPropertiesMapping() {
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


export function tableModalActionInteractions() {
  return {
    onClickConfirm: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_WITH_EVENT, INTERACTIONS_TYPES.ON_CLICK_CONFIRM, undefined, onClickConfirmInteractionFieldVisibility()), required: true },
  };
}

export function tableModalActionInteractionsMapping() {
  return {

  };
}

export function tableModalActionVariants() {
  return {
    default: ''
  };
}

export function tableModalActionRules() {
  return {
    ...baseRules()
  }
}