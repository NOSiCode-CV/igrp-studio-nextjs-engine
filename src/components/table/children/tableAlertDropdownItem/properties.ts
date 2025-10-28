import {
  baseInteraction,
  baseRules,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../../../default/properties';
import { dropdownItemProperties, dropdownItemPropertiesMapping } from '../tableColumns/properties';
import { InteractionFieldVisibility } from '../../../../interfaces/types';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../../../utils/constants';

export function tableAlertDropdownItemProperties() {
  return {
    ...dropdownItemProperties('Alert'),
    type: { type: 'string', required: true, const: 'alert' },
    modalTitle: { type: 'string', required: false, default: 'New Alert' },
    content: { type: 'string', required: true, default: 'A new alert triggered' },
    showCancel: { type: 'boolean', required: false, default: true },
    labelCancel: { type: 'string', required: false, default: 'Cancel' },
    labelTrigger: { type: 'string', required: false },
    variantCancel: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    showConfirm: { type: 'boolean', required: false, default: true },
    labelConfirm: { type: 'string', required: false, default: 'Confirm' },
    variantConfirm: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    classNameItem: { type: 'string', required: false },
    classNameConfirm: { type: 'string', required: false },
    classNameCancel: { type: 'string', required: false },
    ...classProperties(),
    ...commonProperties(),
  };

}

export function tableAlertDropdownItemPropertiesMapping() {
  return {
    ...dropdownItemPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableAlertDropdownItemChildProperties() {
  return {

  };
}

export function tableAlertDropdownItemChildPropertiesMapping() {
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

export function tableAlertDropdownItemInteractions() {
  return {
    onClickConfirm: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_WITH_EVENT, INTERACTIONS_TYPES.ON_CLICK_CONFIRM, undefined, onClickConfirmInteractionFieldVisibility()), required: true },
  };
}

export function tableAlertDropdownItemVariants() {
  return {
    default: ''
  };
}

export function tableAlertDropdownItemRules() {
  return {
    ...baseRules()
  }
}
