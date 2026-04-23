import {
  baseInteraction,
  baseRules,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
  dataCommonProperties,
} from '../../../default/properties';
import { cellProperties, cellPropertiesMapping } from '../tableColumns/properties';
import { InteractionFieldVisibility } from '../../../../interfaces/types';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../../../utils/constants';

export function tableCheckboxCellProperties() {
  return {
    ...cellProperties('Checkbox Column'),
    ...classProperties(),
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function tableCheckboxCellPropertiesMapping() {
  return {
    ...cellPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableCheckboxCellChildProperties() {
  return {

  };
}

export function tableCheckboxCellChildPropertiesMapping() {
  return {

  };
}


export function tableCheckboxCellVariants() {
  return {
    default: ''
  };
}

function onCheckedChangeInteractionFieldVisibility(): InteractionFieldVisibility {
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

export function tableCheckboxCellInteractions() {
  return {
    onCheckedChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_CHANGE, undefined, onCheckedChangeInteractionFieldVisibility()), required: true },
  };
}

export function tableCheckboxCellInteractionsMapping() {
  return {

  };
}

export function tableCheckboxCellRules() {
  return {
    ...baseRules()
  }
}
