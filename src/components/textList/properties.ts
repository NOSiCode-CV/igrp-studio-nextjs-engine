import {
  baseData,
  baseInteraction,
  baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function textListProperties() {
  return {

    isStickyTop: { type: 'boolean', default: false, required: false},
    className: { type: 'string', required: false },
    ...commonProperties()
  };
}

export function textListPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function textListChildProperties() {
  return {
  };
}

export function textListChildPropertiesMapping() {
  return {
  };
}

export function textListVariants() {
  return {};
}

export function textListStyle() {
  return {
    ...baseStyle()
  }
}

export function textListRules() {
  return {
    ...baseRules()
  }
}

export function textListData() {
  return {
    activeSection: { ...baseData(INTERACTIONS_DEFAULTS.EMPTY_ARRAY, INTERACTIONS_TYPES.ACTIVE_SECTION, {
        id: '',
        name: 'textList{{id}}ActiveSection',
        type: 'string',
        defaultValue: ''
      }, true), required: true },
  };
}

function onSectionChangeInteractionFieldVisibility(): InteractionFieldVisibility {
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

export function textListInteractions() {
  return {
    onSectionChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE, undefined, onSectionChangeInteractionFieldVisibility()), required: false,  },
  };
}