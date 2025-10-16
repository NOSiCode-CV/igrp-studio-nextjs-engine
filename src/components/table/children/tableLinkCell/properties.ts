import {
  baseInteraction,
  commonProperties,
  commonPropertiesMapping, dataCommonProperties,
  iconProperties,
} from '../../../default/properties';
import { cellProperties, cellPropertiesMapping } from '../tableColumns/properties';
import { InteractionFieldVisibility } from '../../../../interfaces/types';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../../../utils/constants';

export function tableLinkCellProperties() {
  return {
    ...cellProperties('Link Column'),
    ...dataCommonProperties(),
    content: { type: 'string', required: false },
    href: { type: 'string', required: false, default: 'https://www.igrp.cv/', 'x-ui-widget': 'uri' },
    target: { type: 'string', required: false, enum: ['_self', '_blank', '_parent', '_top'], default: '_self' },
    color: { type: 'string', required: true, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    ...iconProperties(),
    variant: {type: 'string', required: true, enum: ['outline', 'solid', 'soft'], default: 'solid'},
    rel: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function tableLinkCellPropertiesMapping() {
  return {
    ...cellPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableLinkCellChildProperties() {
  return {

  };
}

export function tableLinkCellChildPropertiesMapping() {
  return {

  };
}

export function tableLinkCellVariants() {
  return {
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

export function tableLinkCellInteractions() {
  return {
    onClick: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CLICK, undefined, onClickInteractionFieldVisibility()), required: false },
  };
}