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

export function datePickerMultipleProperties() {
  return {
    label: { type: 'string', required: false },
    placeholder: { type: 'string', required: false, default: 'Enter the date' },
    dateFormat: { type: 'string', required: false, default: 'dd/MM/yyyy' },
    helperText: { type: 'string', required: false, default: '' },
    startDate: { type: 'date', required: false, default: '1900-01-01', 'x-ui-widget': 'date' },
    endDate: { type: 'date', required: false, default: '2099-12-31', 'x-ui-widget': 'date' },
    //floatingLabel: { type: 'boolean', required: false },
    error: { type: 'string', required: false },
    required: { type: 'boolean', required: false },
    disabled: { type: 'boolean', required: false },
    disabledPicker: { type: 'boolean', required: false },
    gridSize: { type: 'string', required: false, enum: ['full', '1/2', '1/3', '2/3', '1/4', '3/4'], default: 'full' },
    dayButtonClassName: { type: 'string', required: false },
    labelClassName: { type: 'string', required: false },
    ...classProperties(),
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function datePickerMultiplePropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function datePickerMultipleChildProperties() {
  return {};
}

export function datePickerMultipleChildPropertiesMapping() {
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

export function datePickerMultipleInteractions() {
  return {
    onDateChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_DATE_CHANGE, undefined, onDateChangeInteractionFieldVisibility()), required: true },
  };
}

export function datePickerMultipleInteractionsMapping() {
  return {

  };
}

export function datePickerMultipleData() {
  return {
    date: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.DATE, {
        id: '',
        name: 'datePickerMultiple{{id}}Value',
        type: 'Date[] | undefined',
      }), required: true },
  };
}

export function datePickerMultipleVariants() {
  return {};
}

export function datePickerMultipleStyle() {
  return {
    ...baseStyle()
  }
}

export function datePickerMultipleRules() {
  return {
    ...baseRules()
  }
}