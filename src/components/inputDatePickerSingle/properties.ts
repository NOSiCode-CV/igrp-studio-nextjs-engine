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

export function inputDatePickerSingleProperties() {
  return {
    date: { type: 'string', required: false, default: '2025-01-01' },
    label: { type: 'string', required: false, default: 'Date Picker' },
    disableDayOfWeek: { type: 'array', items: { type: 'number' }, 'x-ui-widget': 'chips', required: false },
    disableBefore: { type: 'date', required: false, 'x-ui-widget': 'date' },
    disableAfter: { type: 'date', required: false, 'x-ui-widget': 'date' },
    defaultMonth: { type: 'date', required: false, 'x-ui-widget': 'date' },
    dateFormat: { type: 'string', required: false, default: 'dd/MM/yyyy' },
    helperText: { type: 'string', required: false, default: '' },
    required: { type: 'boolean', required: false },
    disabled: { type: 'boolean', required: false },
    disabledPicker: { type: 'boolean', required: false },
    labelClassName: { type: 'string', required: false },
    ...classProperties(),
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function inputDatePickerSinglePropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputDatePickerSingleChildProperties() {
  return {};
}

export function inputDatePickerSingleChildPropertiesMapping() {
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

export function inputDatePickerSingleInteractions() {
  return {
    onDateChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_DATE_CHANGE, undefined, onDateChangeInteractionFieldVisibility()), required: false },
    onMonthChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_MONTH_CHANGE, undefined, onDateChangeInteractionFieldVisibility()), required: false },
  };
}

export function inputDatePickerSingleInteractionsMapping() {
  return {

  };
}

export function inputDatePickerSingleData() {
  return {
    date: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.DATE, {
        id: '',
        name: 'inputDatePickerSingle{{id}}Value',
        type: 'Date | undefined',
      }), required: false },
  };
}

export function inputDatePickerSingleVariants() {
  return {};
}

export function inputDatePickerSingleStyle() {
  return {
    ...baseStyle()
  }
}

export function inputDatePickerSingleRules() {
  return {
    ...baseRules()
  }
}