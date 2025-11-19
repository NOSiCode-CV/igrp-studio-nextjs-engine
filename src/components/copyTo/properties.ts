import {
  baseData,
  baseInteraction,
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping, dataCommonProperties,
} from '../default/properties';
import { InteractionFieldVisibility } from '../../interfaces/types';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function copyToProperties() {
  return {
    value: { type: 'string', required: false, default: '' },
    successMessage: { type: 'string', required: false },
    errorMessage: { type: 'string', required: false },
    tooltipMessage: { type: 'string', required: false },
    tooltipDelayDuration: { type: 'number', required: false },
    toastDuration: { type: 'number', required: false },
    triggerClassName: { type: 'string', required: false },
    ...classProperties(),
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function copyToPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function copyToChildProperties() {
  return {};
}

export function copyToChildPropertiesMapping() {
  return {};
}

function interactionFieldVisibility(): InteractionFieldVisibility {
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

export function copyToInteractions() {
  return {
    onCopySuccess: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_COPY_SUCCESS, undefined, interactionFieldVisibility()), required: false },
    onCopyError: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_WITH_EVENT, INTERACTIONS_TYPES.ON_COPY_ERROR, undefined, interactionFieldVisibility()), required: false },
  };
}

export function copyToData() {
  return {
    value: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.VALUE, {
        id: '',
        name: 'copyTo{{id}}Value',
        type: 'string',
        defaultValue: '{{value}}'
      }), required: true },
  };
}

export function copyToVariants() {
  return {};
}

export function copyToStyle() {
  return {
    ...baseStyle()
  }
}

export function copyToRules() {
  return {
    ...baseRules()
  }
}