import {
  baseData,
  baseInteraction, baseRules, baseStyle,
  commonProperties,
  commonPropertiesMapping,
  dataCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function inputPasswordProperties() {
  return {
    label: { type: 'string', required: false, default: 'Input Password' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    name: { type: 'string', required: true, default: 'password' },
    placeholder: { type: 'string', required: false, default: '' },
    error: { type: 'string', required: false },
    defaultValue: { type: 'string', required: false, default: 'igrpsecret' },
    helperText: { type: 'string', required: false, default: '' },
    showPasswordToggle: { type: 'boolean', required: false, default: true },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    className: { type: 'string', required: false },
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function inputPasswordPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputPasswordChildProperties() {
  return {};
}

export function inputPasswordChildPropertiesMapping() {
  return {};
}

export function inputPasswordInteractions() {
  return {
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE), required: true },
    onKeyDown: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_KEY_DOWN), required: false },
  };
}

export function inputPasswordInteractionsMapping() {
  return {

  };
}

export function inputPasswordData() {
  return {
    value: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.VALUE), required: true },
  };
}

export function inputPasswordVariants() {
  return {};
}

export function inputPasswordStyle() {
  return {
    ...baseStyle()
  }
}

export function inputPasswordRules() {
  return {
    ...baseRules()
  }
}