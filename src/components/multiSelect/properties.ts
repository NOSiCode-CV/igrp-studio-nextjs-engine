import {
  baseData,
  baseInteraction, baseRules, baseStyle, classProperties,
  commonProperties,
  commonPropertiesMapping,
  dataCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function multiSelectProperties() {
  return {
    label: { type: 'string', required: false, default: 'Multi Select' },
    name: { type: 'string', required: false },
    placeholder: { type: 'string', required: false, default: 'Select…' },
    helperText: { type: 'string', required: false },
    errorText: { type: 'string', required: false },
    emptyLabel: { type: 'string', required: false },
    searchPlaceholder: { type: 'string', required: false },
    selectedCountLabel: { type: 'string', required: false, 'x-meta': { label: 'Selected count label ({count})' } },
    selectAllLabel: { type: 'string', required: false },
    clearLabel: { type: 'string', required: false },
    removeChipLabel: { type: 'string', required: false, 'x-meta': { label: 'Remove chip label ({label})' } },
    showSearch: { type: 'boolean', required: false, 'x-ui-widget': 'switch' },
    hideBulkActions: { type: 'boolean', required: false, 'x-ui-widget': 'switch' },
    hideChips: { type: 'boolean', required: false, 'x-ui-widget': 'switch' },
    maxSelected: { type: 'number', required: false },
    disabled: { type: 'boolean', required: false, 'x-ui-widget': 'switch' },
    required: { type: 'boolean', required: false, 'x-ui-widget': 'switch' },
    popoverClassName: { type: 'string', required: false },
    labelClassName: { type: 'string', required: false },

    ...classProperties(),
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function multiSelectPropertiesMapping() {
  return { ...commonPropertiesMapping() };
}

export function multiSelectChildProperties() {
  return {};
}

export function multiSelectChildPropertiesMapping() {
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

export function multiSelectInteractions() {
  return {
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_CHANGE, undefined, onChangeInteractionFieldVisibility()), required: false },
  };
}

export function multiSelectInteractionsMapping() {
  return {};
}

export function multiSelectData() {
  return {
    value: { ...baseData(INTERACTIONS_DEFAULTS.EMPTY_ARRAY, INTERACTIONS_TYPES.VALUE, {
        id: '',
        name: 'multiSelect{{id}}Value',
        type: 'string[]',
        defaultValue: '[]'
      }, true), required: true },
    options: { ...baseData(INTERACTIONS_DEFAULTS.EMPTY_ARRAY, INTERACTIONS_TYPES.OPTIONS, {
        id: '',
        name: 'multiSelect{{id}}Options',
        type: 'IGRPOptionsProps[]',
        defaultValue: '[]'
      }, true), required: true },
  };
}

export function multiSelectVariants() {
  return {};
}

export function multiSelectStyle() {
  return { ...baseStyle() };
}

export function multiSelectRules() {
  return { ...baseRules() };
}
