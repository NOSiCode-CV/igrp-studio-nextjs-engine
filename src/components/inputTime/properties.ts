import { baseInteraction, commonProperties, commonPropertiesMapping, iconProperties } from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function inputTimeProperties() {
  return {
    labelText: { type: 'string', required: false, default: 'InputTime Text' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    helperText: { type: 'string', required: false, default: '' },
    defaultValue: { type: 'string', required: false, default: '' },
    error: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function inputTimePropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputTimeChildProperties() {
  return {};
}

export function inputTimeChildPropertiesMapping() {
  return {};
}

export function inputTimeInteractions() {
  return {
    value: { ...baseInteraction(INTERACTIONS_DEFAULTS.NULLABLE, INTERACTIONS_TYPES.VALUE), required: true },
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE), required: true },
    onKeyDown: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_KEY_DOWN), required: false },
  };
}

export function inputTimeInteractionsMapping() {
  return {

  };
}


export function inputTimeVariants() {
  return {};
}
