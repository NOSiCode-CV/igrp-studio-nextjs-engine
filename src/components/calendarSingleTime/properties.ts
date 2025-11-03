import {
  baseData,
  baseInteraction,
  baseRules,
  baseStyle, classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function calendarSingleTimeProperties() {
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
    ...commonProperties(),
  };
}

export function calendarSingleTimePropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function calendarSingleTimeChildProperties() {
  return {};
}

export function calendarSingleTimeChildPropertiesMapping() {
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

export function calendarSingleTimeInteractions() {
  return {
    onStartTime: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_START_TIME, undefined, onDateChangeInteractionFieldVisibility()), required: false },
    onEndTime: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_END_TIME, undefined, onDateChangeInteractionFieldVisibility()), required: false },
  };
}

export function calendarSingleTimeInteractionsMapping() {
  return {

  };
}

export function calendarSingleTimeData() {
  return {
    date: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.DATE, {
        id: '',
        name: 'calendarSingleTime{{id}}Value',
        type: 'Date | undefined',
      }), required: false },
  };
}

export function calendarSingleTimeVariants() {
  return {};
}

export function calendarSingleTimeStyle() {
  return {
    ...baseStyle()
  }
}

export function calendarSingleTimeRules() {
  return {
    ...baseRules()
  }
}