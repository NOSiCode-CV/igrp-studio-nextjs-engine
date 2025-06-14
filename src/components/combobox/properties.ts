import {
  baseData,
  baseInteraction, baseRules, baseStyle,
  commonProperties,
  commonPropertiesMapping,
  dataCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function comboboxProperties() {
  return {
    label: { type: 'string', required: false, default: "Combobox Input" },
    variant: { type: 'string', required: false, default: 'single', enum: ['single', 'multiple'] },
    //floatingLabel: { type: 'boolean', required: false },
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
    gridSize: { type: 'string', required: false, enum: ['full', '1/2', '1/3', '2/3', '1/4', '3/4'], default: 'full' },
    iconProperties: {
      showIcon: { type: 'boolean', required: false },
      iconName: { type: 'string', required: false, default: "CornerDownRight" },
    },
    selectClassName: { type: 'string', required: false },
    labelClassName: { type: 'string', required: false },
    className: { type: 'string', required: false },
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
      imports: { visible: false },
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