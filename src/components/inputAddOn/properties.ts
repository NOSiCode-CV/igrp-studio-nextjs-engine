import {
  baseData,
  baseInteraction,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
  dataCommonProperties, baseStyle, baseRules,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function inputAddOnProperties() {
  return {
    label: { type: 'string', required: false, default: 'Input Add On' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    optionLabel: { type: 'string', required: false, default: 'Add On Option' },
    //helperText: { type: 'string', required: false, default: '' },
    selectValue: { type: 'string', required: false, default: '' },
    error: { type: 'string', required: false },
    options: { type: 'array', items: { value: { type: 'string', required: true }, label: { type: 'string', required: true },
        color: { type: 'string', required: false } }, required: true }, // Array of objects with value and label
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    classNameGlobal: { type: 'string', required: false },
    classNameLabel: { type: 'string', required: false },
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function inputAddOnPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputAddOnChildProperties() {
  return {};
}

export function inputAddOnChildPropertiesMapping() {
  return {};
}

export function inputAddOnInteractions() {
  return {
    onSelectValueChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_SELECT_CHANGE), required: true },
  };
}

export function inputAddOnInteractionsMapping() {
  return {

  };
}

export function inputAddOnData() {
  return {
    selectValue: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.VALUE), required: true },
    options: { ...baseData(INTERACTIONS_DEFAULTS.EMPTY_ARRAY, INTERACTIONS_TYPES.OPTIONS, {
        id: '',
        name: 'inputAddOn{{id}}Options',
        type: 'IGRPOptionsProps[]',
        defaultValue: '[]'
      }, true), required: true },
  };
}


export function inputAddOnVariants() {
  return {};
}

export function inputAddOnStyle() {
  return {
    ...baseStyle()
  }
}

export function inputAddOnRules() {
  return {
    ...baseRules()
  }
}