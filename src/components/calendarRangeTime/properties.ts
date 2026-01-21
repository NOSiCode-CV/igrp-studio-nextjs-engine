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

export function calendarRangeTimeProperties() {
  return {
    startTimePlaceholder: { type: 'string', required: false },
    endTimePlaceholder: { type: 'string', required: false },
    startTimeLabel: { type: 'string', required: false, default: 'Start Time' },
    endTimeLabel: { type: 'string', required: false, default: 'End Time' },
    showTimeIndicator: { type: 'boolean', required: false, default: false },
    hideEndTimePicker: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: false },
    disabled: { type: 'boolean', required: false },
    ...classProperties(),
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function calendarRangeTimePropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function calendarRangeTimeChildProperties() {
  return {};
}

export function calendarRangeTimeChildPropertiesMapping() {
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

export function calendarRangeTimeInteractions() {
  return {
    onStartTime: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_START_TIME, undefined, onDateChangeInteractionFieldVisibility()), required: false },
    onEndTime: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_END_TIME, undefined, onDateChangeInteractionFieldVisibility()), required: false },
  };
}

export function calendarRangeTimeInteractionsMapping() {
  return {

  };
}

export function calendarRangeTimeData() {
  return {
    date: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.DATE, {
        id: '',
        name: 'calendarRangeTime{{id}}Value',
        type: 'DateRange | undefined',
        defaultValue: '{ from: undefined, to: undefined }'
      }), required: false },
  };
}

export function calendarRangeTimeVariants() {
  return {};
}

export function calendarRangeTimeStyle() {
  return {
    ...baseStyle()
  }
}

export function calendarRangeTimeRules() {
  return {
    ...baseRules()
  }
}