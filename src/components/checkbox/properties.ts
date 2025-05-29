import {
  baseData,
  baseInteraction,
  baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function checkboxProperties() {
  return {
    label: { type: 'string', required: false, default: 'Check' },
    description: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    message: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function checkboxPropertiesMapping() {
  return {
    label: 'label',
    description: 'description',
    disabled: 'disabled',
    message: 'message',
    ...commonPropertiesMapping(),
  };
}

export function checkboxChildProperties() {
  return {

  };
}

export function checkboxChildPropertiesMapping() {
  return {

  };
}

export function checkboxInteractions() {
  return {
    onCheckedChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHECK), required: true },
  };
}

export function checkboxInteractionsMapping() {
  return {

  };
}


export function checkboxData() {
  return {
    checked: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.CHECKED), required: true },
  };
}


export function checkboxVariants() {
  return {};
}

export function checkboxStyle() {
  return {
    ...baseStyle()
  }
}

export function checkboxRules() {
  return {
    ...baseRules()
  }
}