import {
  baseData,
  baseInteraction,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
  dataCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function inputDatePickerProperties() {
  return {
    label: { type: 'string', required: false, default: 'Date Picker' },
    placeholder: { type: 'string', required: false, default: 'Please select a date...' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    name: { type: 'string', required: false, default: '' },
    error: { type: 'string', required: false },
    helperText: { type: 'string', required: false, default: '' },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    calendarClassName: { type: 'string', required: false },
    startDate: { type: 'date', required: false, default: '1900-01-01' },
    endDate: { type: 'date', required: false, default: '2099-12-31' },
    className: { type: 'string', required: false },
    ...dataCommonProperties(),
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
    onDateChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_CHANGE), required: true },
  };
}

export function inputDatePickerInteractionsMapping() {
  return {};
}

export function inputDatePickerData() {
  return {
    date: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.DATE), required: true },
  };
}

export function inputDatePickerVariants() {
  return {};
}
