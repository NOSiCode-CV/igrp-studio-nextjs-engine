import {
  baseInteraction,
  commonProperties,
  commonPropertiesMapping,
  dataCommonProperties,
} from '../../../default/properties';
import { cellProperties, cellPropertiesMapping } from '../tableColumns/properties';
import { InteractionFieldVisibility } from '../../../../interfaces/types';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../../../utils/constants';

export function tableBadgeCellProperties() {
  return {
    ...cellProperties('Badge Column'),
    ...dataCommonProperties(),
    field: { type: 'string', required: true },
    label: { type: 'string', required: true },
    iconProperties: {
      type: 'object',
      properties: {
        showIcon: { type: 'boolean', required: false, default: false },
        iconName: { type: 'string', required: false, default: 'Info' },
        iconPlacement: { type: 'string', required: false, enum: ['start', 'end'], default: 'start' },
      },
    },
    variant: { type: 'string', required: false, default: 'soft', enum: ['solid', 'soft', 'outline'] },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function tableBadgeCellPropertiesMapping() {
  return {
    ...cellPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableBadgeCellChildProperties() {
  return {

  };
}

export function tableBadgeCellChildPropertiesMapping() {
  return {

  };
}

function customizeConfirmInteractionFieldVisibility(): InteractionFieldVisibility {
  return {
    fnName: { visible: true },
    actionName: { visible: false },
    fnCustomSet: { visible: false },
    fnCustomCode: {
      imports: { visible: true },
      states: { visible: false },
      fnCode: { visible: true },
      actionCode: { visible: false }
    },
  }
}

export function tableBadgeCellInteractions() {
  return {
    customize: { ...baseInteraction(undefined, INTERACTIONS_TYPES.CUSTOMIZE, undefined, customizeConfirmInteractionFieldVisibility()), required: true },
  };
}

export function tableBadgeCellVariants() {
  return {
    default: ''
  };
}
