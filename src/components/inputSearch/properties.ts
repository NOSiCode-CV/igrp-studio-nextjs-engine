import {
  baseData,
  baseInteraction, baseRules, baseStyle,
  commonProperties,
  commonPropertiesMapping,
  dataCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

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

function setValueChangeInteractionFieldVisibility(): InteractionFieldVisibility {
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

function onSearchInteractionFieldVisibility(): InteractionFieldVisibility {
  return {
    fnName: { visible: true },
    actionName: { visible: false },
    fnCustomSet: { visible: false },
    fnCustomCode: {
      imports: { visible: true },
      states: { visible: true },
      fnCode: { visible: true },
      actionCode: { visible: false }
    },
  }
}

export function inputSearchInteractions() {
  return {
    onSearch: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_STRING_VALUE, INTERACTIONS_TYPES.ON_SEARCH, undefined, onSearchInteractionFieldVisibility()), required: false },
    setValueChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_STRING_VALUE, INTERACTIONS_TYPES.VALUE_CHANGE, undefined, setValueChangeInteractionFieldVisibility()), required: true },
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

export function inputSearchStyle() {
  return {
    ...baseStyle()
  }
}

export function inputSearchRules() {
  return {
    ...baseRules()
  }
}