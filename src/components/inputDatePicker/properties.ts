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
    gridSize: { type: 'string', required: false, enum: ['full', '1/2', '1/3', '2/3', '1/4', '3/4'], default: 'full' },
    labelClassName: { type: 'string', required: false },
    dateFormat: { type: 'string', required: false, default: 'dd/MM/yyyy' },
    today: { type: 'date', required: false, default: '2025-01-01' },
    startDate: { type: 'date', required: false, default: '1900-01-01' },
    endDate: { type: 'date', required: false, default: '2099-12-31' },
    defaultMonth: { type: 'date', required: false, default: '2025-01-01' },
    startMonth: { type: 'date', required: false, default: '2025-01-01' },
    month: { type: 'date', required: false, default: '2025-01-01' },
    endMonth: { type: 'date', required: false, default: '2025-12-31' },
    numberOfMonths: { type: 'number', required: false, default: '1' },
    weekStartsOn: { type: 'number', required: false, enum: [0, 1, 2, 3, 4, 5, 6], default: 'full' },
    pagedNavigation: { type: 'boolean', required: true, default: false },
    reverseMonths: { type: 'boolean', required: true, default: false },
    hideNavigation: { type: 'boolean', required: false, default: false },
    disableNavigation: { type: 'boolean', required: false, default: false },
    fixedWeeks: { type: 'boolean', required: false, default: false },
    hideWeekdays: { type: 'boolean', required: false, default: false },
    showOutsideDays: { type: 'boolean', required: false, default: false },
    showWeekNumber: { type: 'boolean', required: false, default: false },
    animate: { type: 'boolean', required: false, default: false },
    broadcastCalendar: { type: 'boolean', required: false, default: false },
    ISOWeek: { type: 'boolean', required: false, default: false },
    captionLayout: { type: 'string', required: false, enum: ['label', 'dropdown', 'dropdown-months', 'dropdown-years'], default: 'label' },
    navLayout: { type: 'string', required: false, enum: ['around', 'after'] },
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
    onDateChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_DATE_CHANGE), required: true },
    onMonthChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_MONTH_CHANGE), required: false },
    onNextClick: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_NEXT_CLICK), required: false },
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
