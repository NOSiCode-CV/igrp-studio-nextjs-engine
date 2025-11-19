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

export function calendarMultipleProperties() {
  return {
    disableDayOfWeek: { type: 'number', required: false },
    disableBefore: { type: 'date', required: false, default: '1900-01-01', 'x-ui-widget': 'date' },
    disableAfter: { type: 'date', required: false, default: '2099-12-31', 'x-ui-widget': 'date' },
    defaultMonth: { type: 'date', required: false, default: '2026-01-01', 'x-ui-widget': 'date' },
    required: { type: 'boolean', required: false },
    disabled: { type: 'boolean', required: false },
    ...classProperties(),
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function calendarMultiplePropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function calendarMultipleChildProperties() {
  return {};
}

export function calendarMultipleChildPropertiesMapping() {
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

export function calendarMultipleInteractions() {
  return {
    onDateChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_DATE_CHANGE, undefined, onDateChangeInteractionFieldVisibility()), required: true },
    onMonthChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_MONTH_CHANGE, undefined, onDateChangeInteractionFieldVisibility()), required: false },
  };
}

export function calendarMultipleInteractionsMapping() {
  return {

  };
}

export function calendarMultipleData() {
  return {
    date: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.DATE, {
        id: '',
        name: 'calendarMultiple{{id}}Value',
        type: 'Date[] | undefined',
      }), required: false },
  };
}

export function calendarMultipleVariants() {
  return {};
}

export function calendarMultipleStyle() {
  return {
    ...baseStyle()
  }
}

export function calendarMultipleRules() {
  return {
    ...baseRules()
  }
}