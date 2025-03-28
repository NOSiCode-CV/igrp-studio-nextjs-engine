import { baseInteraction, commonProperties, commonPropertiesMapping } from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function selectProperties() {
  return {
    labelText: { type: 'string', required: false },
    //floatingLabel: { type: 'boolean', required: false },
    placeholder: { type: 'string', required: false },
    helperText: { type: 'string', required: false },
    options: { type: 'array', items: { value: { type: 'string', required: true }, label: { type: 'string', required: true },
        color: { type: 'string', required: false } }, required: true }, // Array of objects with value and label
    disabled: { type: 'boolean', required: false },
    required: { type: 'boolean', required: true },
    message: { type: 'string', required: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function selectPropertiesMapping() {
  return {...commonPropertiesMapping()};
}

export function selectChildProperties() {
  return {};
}

export function selectChildPropertiesMapping() {
  return {};
}

export function selectInteractions() {
  return {
    value: { ...baseInteraction(INTERACTIONS_DEFAULTS.NULLABLE, INTERACTIONS_TYPES.VALUE), required: true },
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE), required: true },
  };
}

export function selectInteractionsMapping() {
  return {

  };
}

export function selectVariants() {
  return {};
}
