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

export function datePickerRangeProperties() {
  return {
    date: { type: 'string', required: false },
    label: { type: 'string', required: false },
    placeholder: { type: 'string', required: false, default: 'Enter the date' },
    dateFormat: { type: 'string', required: false, default: 'dd/MM/yyyy' },
    helperText: { type: 'string', required: false, default: '' },
    startDate: { type: 'date', required: false, 'x-ui-widget': 'date' },
    endDate: { type: 'date', required: false, 'x-ui-widget': 'date' },
    startMonth: { type: 'date', required: false, 'x-ui-widget': 'date' },
    endMonth: { type: 'date', required: false, 'x-ui-widget': 'date' },
    //floatingLabel: { type: 'boolean', required: false },
    error: { type: 'string', required: false },
    required: { type: 'boolean', required: false },
    disabled: { type: 'boolean', required: false },
    disabledPicker: { type: 'boolean', required: false },
    dayButtonClassName: { type: 'string', required: false },
    labelClassName: { type: 'string', required: false },
    ...classProperties(),
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function datePickerRangePropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function datePickerRangeChildProperties() {
  return {};
}

export function datePickerRangeChildPropertiesMapping() {
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

export function datePickerRangeInteractions() {
  return {
    onDateChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_DATE_CHANGE, undefined, onDateChangeInteractionFieldVisibility()), required: false },
  };
}

export function datePickerRangeInteractionsMapping() {
  return {

  };
}

export function datePickerRangeData() {
  return {
    date: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.DATE, {
        id: '',
        name: 'dateRange{{id}}Value',
        type: 'DateRange | undefined',
        defaultValue: '{ from: undefined, to: undefined }'
      }), required: true },
  };
}

export function datePickerRangeVariants() {
  return {};
}

export function datePickerRangeStyle() {
  return {
    ...baseStyle()
  }
}

export function datePickerRangeRules() {
  return {
    ...baseRules()
  }
}