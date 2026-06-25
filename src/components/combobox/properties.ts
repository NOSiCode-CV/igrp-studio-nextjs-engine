import {
  baseData,
  baseInteraction, baseRules, baseStyle, classProperties,
  commonProperties,
  commonPropertiesMapping,
  dataCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function comboboxProperties() {
  return {
    label: { type: 'string', required: false, default: "Combobox Input" },
    value: { type: 'string', required: false, default: '' },
    variant: { type: 'string', required: false, default: 'single', enum: ['single', 'multiple'] },
    //floatingLabel: { type: 'boolean', required: false },
    options: { type: 'array', items: { value: { type: 'string', required: true }, label: { type: 'string', required: true }, color: { type: 'string', required: false } }, 'x-ui-widget': 'list' },
    placeholder: { type: 'string', required: false, default: "Select an option..." },
    helperText: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    required: { type: 'boolean', required: true },
    selectLabel: { type: 'string', required: false, default: "No option found" },
    errorText: { type: 'string', required: false },
    searchText: { type: 'string', required: false },
    showSearch: { type: 'boolean', required: false, default: true },
    showGroup: { type: 'boolean', required: false },
    showStatus: { type: 'boolean', required: false },
    iconProperties: {
      type: 'object',
      properties: {
        showIcon: { type: 'boolean', required: false, default: false },
        iconName: { type: 'string', required: false, default: "CornerDownRight", 'x-ui-widget': 'icon' },
      },
    },
    selectClassName: { type: 'string', required: false },
    labelClassName: { type: 'string', required: false },
    defaultValue: { type: 'string', required: false },

    ...classProperties(),
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function comboboxPropertiesMapping() {
  return {...commonPropertiesMapping()};
}

export function comboboxChildProperties() {
  return {};
}

export function comboboxChildPropertiesMapping() {
  return {};
}

function onChangeInteractionFieldVisibility(): InteractionFieldVisibility {
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

export function comboboxInteractions() {
  return {
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE, undefined, onChangeInteractionFieldVisibility()), required: true,  },
  };
}

export function comboboxInteractionsMapping() {
  return {

  };
}

export function comboboxData() {
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

export function comboboxVariants() {
  return {
    single: "single",
    multiple: "multiple",
  };
}

export function comboboxStyle() {
  return {
    ...baseStyle()
  }
}

export function comboboxRules() {
  return {
    ...baseRules()
  }
}