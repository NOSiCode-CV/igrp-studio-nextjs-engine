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

export function calendarSingleProperties() {
  return {
    disableDayOfWeek: { type: 'array', items: { type: 'number' }, 'x-ui-widget': 'chips', required: false },
    disableBefore: { type: 'date', required: false, 'x-ui-widget': 'date' },
    disableAfter: { type: 'date', required: false, 'x-ui-widget': 'date' },
    defaultMonth: { type: 'date', required: false, 'x-ui-widget': 'date' },
    required: { type: 'boolean', required: false },
    disabled: { type: 'boolean', required: false },
    ...classProperties(),
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function calendarSinglePropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function calendarSingleChildProperties() {
  return {};
}

export function calendarSingleChildPropertiesMapping() {
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

export function calendarSingleInteractions() {
  return {
    onDateChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_DATE_CHANGE, undefined, onDateChangeInteractionFieldVisibility()), required: false },
    onMonthChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_MONTH_CHANGE, undefined, onDateChangeInteractionFieldVisibility()), required: false },
  };
}

export function calendarSingleInteractionsMapping() {
  return {

  };
}

export function calendarSingleData() {
  return {
    date: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.DATE, {
        id: '',
        name: 'calendarSingle{{id}}Value',
        type: 'Date | undefined',
      }), required: false },
  };
}

export function calendarSingleVariants() {
  return {};
}

export function calendarSingleStyle() {
  return {
    ...baseStyle()
  }
}

export function calendarSingleRules() {
  return {
    ...baseRules()
  }
}