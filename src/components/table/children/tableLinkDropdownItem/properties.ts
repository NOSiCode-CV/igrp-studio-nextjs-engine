import { baseInteraction, commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { dropdownItemProperties, dropdownItemPropertiesMapping } from '../tableColumns/properties';
import { InteractionFieldVisibility } from '../../../../interfaces/types';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../../../utils/constants';

export function tableLinkDropdownItemProperties() {
  return {
    ...dropdownItemProperties('Link'),
    type: { type: 'string', required: true, const: 'link' },
    href: { type: 'string', required: false, default: 'https://www.igrp.cv/', 'x-ui-widget': 'uri' },
    segments: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string', required: true },
          tag: { type: 'string', required: false },
          value: { type: 'string', required: false }
        },
        required: false
      },
      'x-ui-widget': 'hidden'
    },
    classNameItem: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function tableLinkDropdownItemPropertiesMapping() {
  return {
    ...dropdownItemPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableLinkDropdownItemChildProperties() {
  return {

  };
}

export function tableLinkDropdownItemChildPropertiesMapping() {
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

export function tableLinkDropdownItemInteractions() {
  return {
    action: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_WITH_EVENT, INTERACTIONS_TYPES.ACTION, undefined, actionInteractionFieldVisibility()), required: true },
  };
}

export function tableLinkDropdownItemVariants() {
  return {
    default: ''
  };
}
