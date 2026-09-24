import {
  baseData,
  baseInteraction, baseRules, baseStyle, classProperties,
  commonProperties,
  commonPropertiesMapping,
  dataCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function selectProperties() {
  return {
    label: { type: 'string', required: false, default: "Select Input" },
    value: { type: 'string', required: false, default: '' },
    placeholder: { type: 'string', required: false, default: "Select an option..." },
    options: { type: 'array', items: { value: { type: 'string', required: true }, label: { type: 'string', required: true }, color: { type: 'string', required: false } }, 'x-ui-widget': 'list' },
    helperText: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    required: { type: 'boolean', required: true },
    selectClassName: { type: 'string', required: false },
    labelClassName: { type: 'string', required: false },
    //selectLabel: { type: 'string', required: false, default: "No option found" },
    error: { type: 'string', required: false },
    showSearch: { type: 'boolean', required: false },
    showGroup: { type: 'boolean', required: false },
    showStatus: { type: 'boolean', required: false },
    showIcon: { type: 'boolean', required: false },
    /*iconProperties: {
      iconName: { type: 'string', required: false, default: "CornerDownRight" },
    },*/    defaultValue: { type: 'string', required: false },

    ...classProperties(),
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function selectPropertiesMapping() {
  return {...commonPropertiesMapping()};
}

export function selectChildProperties() {
  return {};
}

export function selectChildPropertiesMapping() {
  return {};
}

function onValueChangeInteractionFieldVisibility(): InteractionFieldVisibility {
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

export function selectInteractions() {
  return {
    onValueChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE, undefined, onValueChangeInteractionFieldVisibility()), required: true,  },
    onOpenChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_OPEN), required: false },
  };
}

export function selectInteractionsMapping() {
  return {

  };
}

export function selectData() {
  return {
    value: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.VALUE, {
        id: '',
        name: 'select{{id}}Value',
        type: 'string',
        defaultValue: '{{value}}'
      }), required: true },
    options: { ...baseData(INTERACTIONS_DEFAULTS.EMPTY_ARRAY, INTERACTIONS_TYPES.OPTIONS, {
        id: '',
        name: 'select{{id}}Options',
        type: 'IGRPOptionsProps[]',
        defaultValue: '[]'
      }, true), required: true },
  };
}

export function selectVariants() {
  return {
    single: "single",
    multiple: "multiple",
  };
}

export function selectStyle() {
  return {
    ...baseStyle()
  }
}

export function selectRules() {
  return {
    ...baseRules()
  }
}
