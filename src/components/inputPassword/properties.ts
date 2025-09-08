import {
  baseData,
  baseInteraction, baseRules, baseStyle,
  commonProperties,
  commonPropertiesMapping,
  dataCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function inputPasswordProperties() {
  return {
    value: { type: 'string', required: false, default: '' },
    label: { type: 'string', required: false, default: 'Input Password' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
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

export function inputPasswordInteractions() {
  return {
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE, undefined, onChangeInteractionFieldVisibility()), required: false },
    onKeyDown: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_KEY_DOWN), required: false },
  };
}

export function inputPasswordInteractionsMapping() {
  return {

  };
}

export function inputPasswordData() {
  return {
    //value: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.VALUE), required: true },
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