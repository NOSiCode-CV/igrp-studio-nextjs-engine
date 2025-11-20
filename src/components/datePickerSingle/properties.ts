import {
  baseData,
  baseInteraction,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
  dataCommonProperties, baseStyle, baseRules, classProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function datePickerSingleProperties() {
  return {
    date: { type: 'string', required: false, default: '2025-01-01' },
    label: { type: 'string', required: false, default: 'Date Picker' },
    placeholder: { type: 'string', required: false, default: 'Please select a date...' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    error: { type: 'string', required: false },
    helperText: { type: 'string', required: false, default: '' },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    gridSize: { type: 'string', required: false, enum: ['full', '1/2', '1/3', '2/3', '1/4', '3/4'], default: 'full' },
    labelClassName: { type: 'string', required: false },
    dateFormat: { type: 'string', required: false, default: 'dd/MM/yyyy' },
    today: { type: 'date', required: false, 'x-ui-widget': 'date' },
    startDate: { type: 'date', required: false, 'x-ui-widget': 'date' },
    endDate: { type: 'date', required: false, 'x-ui-widget': 'date' },
    defaultMonth: { type: 'date', required: false, 'x-ui-widget': 'date' },
    startMonth: { type: 'date', required: false, 'x-ui-widget': 'date' },
    month: { type: 'date', required: false, 'x-ui-widget': 'date' },
    endMonth: { type: 'date', required: false, 'x-ui-widget': 'date' },
    numberOfMonths: { type: 'number', required: false, default: '1' },
    weekStartsOn: { type: 'number', required: false, enum: [0, 1, 2, 3, 4, 5, 6], default: 0 },
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
    ...classProperties(),
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function datePickerSinglePropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function datePickerSingleChildProperties() {
  return {};
}

export function datePickerSingleChildPropertiesMapping() {
  return {};
}

function onChangeInteractionFieldVisibility(): InteractionFieldVisibility {
  return {
    fnName: { visible: true },
    actionName: { visible: false },
    fnCustomSet: { visible: true },
    fnCustomCode: {
      imports: { visible: true },
      states: { visible: false },
      fnCode: { visible: false },
      actionCode: { visible: false }
    },
  }
}

function onClickInteractionFieldVisibility(): InteractionFieldVisibility {
  return {
    fnName: { visible: true },
    actionName: { visible: false },
    fnCustomSet: { visible: true },
    fnCustomCode: {
      imports: { visible: true },
      states: { visible: false },
      fnCode: { visible: false },
      actionCode: { visible: false }
    },
  }
}

export function datePickerSingleInteractions() {
  return {
    onDateChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_DATE_CHANGE, undefined, onChangeInteractionFieldVisibility()), required: true },
    onMonthChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_MONTH_CHANGE, undefined, onChangeInteractionFieldVisibility()), required: false },
    onNextClick: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_NEXT_CLICK, undefined, onClickInteractionFieldVisibility()), required: false },
  };
}

export function datePickerSingleInteractionsMapping() {
  return {};
}

export function datePickerSingleData() {
  return {
    //date: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.DATE), required: true },
  };
}

export function datePickerSingleVariants() {
  return {};
}

export function datePickerSingleStyle() {
  return {
    ...baseStyle()
  }
}

export function datePickerSingleRules() {
  return {
    ...baseRules()
  }
}