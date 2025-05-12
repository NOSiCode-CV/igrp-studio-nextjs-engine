import {
  baseInteraction,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
  inputCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function inputDatePickerProperties() {
  return {
    label: { type: 'string', required: false, default: 'InputDatePicker Text' },
    placeholder: { type: 'string', required: false, default: 'Please select a date...' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    name: { type: 'string', required: false, default: '' },
    error: { type: 'string', required: false },
    defaultValue: { type: 'string', required: false, default: '2025-01-01' },
    helperText: { type: 'string', required: false, default: '' },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    calendarClassName: { type: 'string', required: false },
    fromDate: { type: 'date', required: false, default: '1900-01-01' },
    toDate: { type: 'date', required: false, default: '2099-12-31' },
    className: { type: 'string', required: false },
    ...inputCommonProperties(),
    ...commonProperties(),
  };
}

export function inputDatePickerPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputDatePickerChildProperties() {
  return {};
}

export function inputDatePickerChildPropertiesMapping() {
  return {};
}

export function inputDatePickerInteractions() {
  return {
    date: { ...baseInteraction(INTERACTIONS_DEFAULTS.NULLABLE, INTERACTIONS_TYPES.DATE), required: true },
    onDateChange: { ...baseInteraction, required: true },
  };
}

export function inputDatePickerInteractionsMapping() {
  return {};
}

export function checkboxInteractionsMapping() {
  return {

  };
}


export function inputDatePickerVariants() {
  return {};
}
