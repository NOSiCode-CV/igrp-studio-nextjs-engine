import {
  baseData,
  baseInteraction,
  commonProperties,
  commonPropertiesMapping,
  dataCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function selectProperties() {
  return {
    label: { type: 'string', required: false, default: "Select Input" },
    variant: { type: 'string', required: false, default: 'single', enum: ['single', 'multiple'] },
    //floatingLabel: { type: 'boolean', required: false },
    placeholder: { type: 'string', required: false, default: "Select an option..." },
    helperText: { type: 'string', required: false },
    options: { type: 'array', items: { value: { type: 'string', required: true }, label: { type: 'string', required: true },
        color: { type: 'string', required: false } }, required: true }, // Array of objects with value and label
    disabled: { type: 'boolean', required: false },
    required: { type: 'boolean', required: true },
    message: { type: 'string', required: false },
    selectClassName: { type: 'string', required: false },
    labelClassName: { type: 'string', required: false },
    selectLabel: { type: 'string', required: false, default: "No option found" },
    errorText: { type: 'string', required: false },
    showSearch: { type: 'boolean', required: false },
    showGroup: { type: 'boolean', required: false },
    showStatus: { type: 'boolean', required: false },
    showIcon: { type: 'boolean', required: false },
    formContext: { type: 'boolean', required: false },
    iconProperties: {
      iconName: { type: 'string', required: false, default: "CornerDownRight" },
    },
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
