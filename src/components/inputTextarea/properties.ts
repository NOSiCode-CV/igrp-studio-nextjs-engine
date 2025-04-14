import { baseInteraction, commonProperties, commonPropertiesMapping, iconProperties } from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function inputTextareaProperties() {
  return {
    name: { type: 'string', required: true, default: 'textarea' },
    labelText: { type: 'string', required: false, default: 'InputTextarea Text' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    helperText: { type: 'string', required: false, default: '' },
    error: { type: 'string', required: false },
    rows: { type: 'number', required: false, default: 3 },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function inputTextareaPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputTextareaChildProperties() {
  return {};
}

export function inputTextareaChildPropertiesMapping() {
  return {};
}

export function inputTextareaInteractions() {
  return {
    value: { ...baseInteraction(INTERACTIONS_DEFAULTS.NULLABLE, INTERACTIONS_TYPES.VALUE), required: true },
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE), required: true },
    onKeyDown: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_KEY_DOWN), required: false },
  };
}

export function inputTextareaInteractionsMapping() {
  return {

  };
}


export function inputTextareaVariants() {
  return {};
}
