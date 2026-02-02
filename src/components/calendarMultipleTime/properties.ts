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

export function calendarMultipleTimeProperties() {
  return {
    startTimePlaceholder: { type: 'string', required: false },
    endTimePlaceholder: { type: 'string', required: false },
    startTimeLabel: { type: 'string', required: false, default: 'Start Time' },
    endTimeLabel: { type: 'string', required: false, default: 'End Time' },
    showTimeIndicator: { type: 'boolean', required: false, default: false },
    hideEndTimePicker: { type: 'boolean', required: false, default: false },
    startMonth: { type: 'date', required: false, 'x-ui-widget': 'date' },
    endMonth: { type: 'date', required: false, 'x-ui-widget': 'date' },
    required: { type: 'boolean', required: false },
    disabled: { type: 'boolean', required: false },
    ...classProperties(),
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function calendarMultipleTimePropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function calendarMultipleTimeChildProperties() {
  return {};
}

export function calendarMultipleTimeChildPropertiesMapping() {
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

export function calendarMultipleTimeInteractions() {
  return {
    onStartTime: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_START_TIME, undefined, onDateChangeInteractionFieldVisibility()), required: false },
    onEndTime: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_END_TIME, undefined, onDateChangeInteractionFieldVisibility()), required: false },
  };
}

export function calendarMultipleTimeInteractionsMapping() {
  return {

  };
}

export function calendarMultipleTimeData() {
  return {
    date: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.DATE, {
        id: '',
        name: 'calendarMultipleTime{{id}}Value',
        type: 'Date[] | undefined',
      }), required: false },
  };
}

export function calendarMultipleTimeVariants() {
  return {};
}

export function calendarMultipleTimeStyle() {
  return {
    ...baseStyle()
  }
}

export function calendarMultipleTimeRules() {
  return {
    ...baseRules()
  }
}