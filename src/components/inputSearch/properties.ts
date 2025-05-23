import {
  baseData,
  baseInteraction,
  commonProperties,
  commonPropertiesMapping,
  dataCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function inputSearchProperties() {
  return {
    label: { type: 'string', required: false, default: 'Input Search' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    placeholder: { type: 'string', required: false, default: '' },
    helperText: { type: 'string', required: false, default: '' },
    iconProperties: {
      type: 'object',
      properties: {
        showStartIcon: { type: 'boolean', required: false, default: false },
        startIcon: { type: 'string', required: false, default: 'Search' },
        submitIcon: { type: 'string', required: false, default: 'ArrowRight' },
      }
    },
    showSubmitButton: { type: 'boolean', required: false, default: false },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    submitButtonLabel: { type: 'string', required: false },
    submitButtonClassName: { type: 'string', required: false },
    className: { type: 'string', required: false },
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function inputSearchPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputSearchChildProperties() {
  return {};
}

export function inputSearchChildPropertiesMapping() {
  return {};
}

export function inputSearchInteractions() {
  return {
    onSearch: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_STRING_VALUE, INTERACTIONS_TYPES.ON_SEARCH), required: true },
    setValueChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_STRING_VALUE, INTERACTIONS_TYPES.VALUE_CHANGE), required: false },
  };
}

export function inputSearchData() {
  return {
    value: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.VALUE, {
        id: '',
        name: 'inputSearch{{id}}Value',
        type: 'string',
        defaultValue: ''
      }, true), required: true },
    //defaultValue: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.DEFAULT_VALUE), required: false },
  };
}

export function inputSearchVariants() {
  return {};
}
