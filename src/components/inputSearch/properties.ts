import {
  baseData,
  baseInteraction, baseRules, baseStyle, classProperties,
  commonProperties,
  commonPropertiesMapping,
  dataCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function inputSearchProperties() {
  return {
    label: { type: 'string', required: false, default: 'Input Search', 'x-ui-widget': 'text', 'x-meta': { label: 'Label'} },
    value: { type: 'string', required: false, default: '' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    placeholder: { type: 'string', required: false, default: '', 'x-ui-widget': 'text', 'x-meta': { label: 'Placeholder'} },
    helperText: { type: 'string', required: false, default: '', 'x-ui-widget': 'text', 'x-meta': { label: 'Helper Text'} },
    minLength: { type: 'number', required: false },
    maxLength: { type: 'number', required: false },
    showSubmitButton: { type: 'boolean', required: false, default: false, 'x-ui-widget': 'switch', 'x-meta': { label: 'Show Submit Button'} },
    iconProperties: {
      type: 'object',
      properties: {
        showStartIcon: { type: 'boolean', required: false, default: true, 'x-ui-widget': 'switch', 'x-meta': { label: 'Show Start Icon?'} },
        startIcon: { type: 'string', required: false, default: 'Search', 'x-ui-widget': 'icon', 'x-meta': { label: 'Start Icon'} },
        submitIcon: { type: 'string', required: false, default: 'ArrowRight', 'x-ui-widget': 'icon', 'x-meta': { label: 'Submit Icon'} },
      }
    },
    disabled: { type: 'boolean', required: false, default: false, 'x-ui-widget': 'switch', 'x-meta': { label: 'Disabled'} },
    required: { type: 'boolean', required: true, default: false, 'x-ui-widget': 'switch', 'x-meta': { label: 'Required'} },
    submitButtonLabel: { type: 'string', required: false, default: 'Search', 'x-ui-widget': 'text', 'x-meta': { label: 'Submit Button Label'} },
    submitButtonClassName: { type: 'string', required: false, 'x-ui-widget': 'text', 'x-meta': { label: 'Submit Button Class Name'} },
    ...classProperties(),
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
    fnCustomSet: { visible: true },
    fnCustomCode: {
      imports: { visible: true },
      states: { visible: true },
      fnCode: { visible: false },
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
    /*value: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.VALUE, {
        id: '',
        name: 'inputSearch{{id}}Value',
        type: 'string',
        defaultValue: ''
      }, true), required: true },*/
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