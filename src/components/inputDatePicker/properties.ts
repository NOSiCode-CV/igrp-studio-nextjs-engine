import { baseInteraction, commonProperties, commonPropertiesMapping, iconProperties } from '../default/properties';

export function inputDatePickerProperties() {
  return {
    labelText: { type: 'string', required: false, default: 'InputDatePicker Text' },
    placeholder: { type: 'string', required: false, default: 'Please select a date...' },
    floatingLabel: { type: 'boolean', required: false, default: false },
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
    date: { ...baseInteraction, required: true, default: 'value' },
    onDateChange: { ...baseInteraction, required: true, default: '(e) => set{{id}}Value(e)' },
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
