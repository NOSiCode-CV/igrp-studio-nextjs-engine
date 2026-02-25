import {
  baseData,
  baseInteraction,
  baseRules,
  baseStyle, classProperties,
  commonProperties,
  commonPropertiesMapping, dataCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function calendarRangeProperties() {
  return {
    disableDayOfWeek: { type: 'array', items: { type: 'number' }, 'x-ui-widget': 'chips', required: false },
    disableBefore: { type: 'date', required: false, 'x-ui-widget': 'date' },
    disableAfter: { type: 'date', required: false, 'x-ui-widget': 'date' },
    defaultMonth: { type: 'date', required: false, 'x-ui-widget': 'date' },
    startMonth: { type: 'date', required: false, 'x-ui-widget': 'date' },
    endMonth: { type: 'date', required: false, 'x-ui-widget': 'date' },
    required: { type: 'boolean', required: false },
    disabled: { type: 'boolean', required: false },
    ...classProperties(),
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function calendarRangePropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function calendarRangeChildProperties() {
  return {};
}

export function calendarRangeChildPropertiesMapping() {
  return {};
}

function onDateChangeInteractionFieldVisibility(): InteractionFieldVisibility {
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

export function calendarRangeInteractions() {
  return {
    onDateChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_DATE_CHANGE, undefined, onDateChangeInteractionFieldVisibility()), required: false },
    onMonthChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_MONTH_CHANGE, undefined, onDateChangeInteractionFieldVisibility()), required: false },
  };
}

export function calendarRangeInteractionsMapping() {
  return {

  };
}

export function calendarRangeData() {
  return {
    date: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.DATE, {
        id: '',
        name: 'calendarRange{{id}}Value',
        type: 'DateRange | undefined',
        defaultValue: '{ from: undefined, to: undefined }'
      }), required: true },
  };
}

export function calendarRangeVariants() {
  return {};
}

export function calendarRangeStyle() {
  return {
    ...baseStyle()
  }
}

export function calendarRangeRules() {
  return {
    ...baseRules()
  }
}