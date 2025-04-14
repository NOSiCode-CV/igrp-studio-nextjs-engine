import { baseInteraction, commonProperties, commonPropertiesMapping } from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function comboboxProperties() {
  return {
    labelText: { type: 'string', required: false, default: "Combobox Input" },
    variant: { type: 'string', required: false, default: 'single', enum: ['single', 'multiple'] },
    //floatingLabel: { type: 'boolean', required: false },
    placeholder: { type: 'string', required: false, default: "Select an option..." },
    helperText: { type: 'string', required: false },
    options: { type: 'array', items: { value: { type: 'string', required: true }, label: { type: 'string', required: true },
        color: { type: 'string', required: false } }, required: true }, // Array of objects with value and label
    disabled: { type: 'boolean', required: false },
    required: { type: 'boolean', required: true },
    message: { type: 'string', required: false },
    selectClassName: { type: 'string', required: false },
    labelClassName: { type: 'string', required: false },
    selectLabel: { type: 'string', required: false, default: "No option found" },
    errorText: { type: 'string', required: false },
    showSearch: { type: 'boolean', required: false },
    showGroup: { type: 'boolean', required: false },
    showStatus: { type: 'boolean', required: false },
    showIcon: { type: 'boolean', required: false },
    formContext: { type: 'boolean', required: false },
    iconProperties: {
      iconName: { type: 'string', required: false, default: "CornerDownRight" },
    },
    ...commonProperties(),
  };
}

export function comboboxPropertiesMapping() {
  return {...commonPropertiesMapping()};
}

export function comboboxChildProperties() {
  return {};
}

export function comboboxChildPropertiesMapping() {
  return {};
}

export function comboboxInteractions() {
  return {
    value: { ...baseInteraction(INTERACTIONS_DEFAULTS.NULLABLE, INTERACTIONS_TYPES.VALUE), required: true },
    onChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE), required: true },
  };
}

export function comboboxInteractionsMapping() {
  return {

  };
}

export function comboboxVariants() {
  return {
    single: "single",
    multiple: "multiple",
  };
}
