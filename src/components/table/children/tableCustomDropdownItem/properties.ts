import { baseInteraction, baseRules, commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { dropdownItemProperties, dropdownItemPropertiesMapping } from '../tableColumns/properties';
import { InteractionFieldVisibility } from '../../../../interfaces/types';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../../../utils/constants';

export function tableCustomDropdownItemProperties() {
  return {
    ...dropdownItemProperties('Custom'),
    classNameItem: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function tableCustomDropdownItemPropertiesMapping() {
  return {
    ...dropdownItemPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableCustomDropdownItemChildProperties() {
  return {

  };
}

export function tableCustomDropdownItemChildPropertiesMapping() {
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

export function tableCustomDropdownItemInteractions() {
  return {
    action: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_WITH_EVENT, INTERACTIONS_TYPES.ACTION, undefined, actionInteractionFieldVisibility()), required: true },
  };
}

export function tableCustomDropdownItemVariants() {
  return {
    default: ''
  };
}

export function tableCustomDropdownItemRules() {
  return {
    ...baseRules()
  }
}