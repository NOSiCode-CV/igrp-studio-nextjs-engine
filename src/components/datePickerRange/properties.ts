import {
  baseData,
  baseInteraction,
  baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function datePickerRangeProperties() {
  return {
    label: { type: 'string', required: false },
    placeholder: { type: 'string', required: false, default: 'Enter the date' },
    dateFormat: { type: 'string', required: false, default: 'dd/MM/yyyy' },
    helperText: { type: 'string', required: false, default: '' },
    iconPlacement: { type: 'string', required: false, default: 'start' },
    startDate: { type: 'date', required: false, default: '1900-01-01' },
    endDate: { type: 'date', required: false, default: '2099-12-31' },
    //floatingLabel: { type: 'boolean', required: false },
    error: { type: 'string', required: false },
    required: { type: 'boolean', required: false },
    disabled: { type: 'boolean', required: false },
    gridSize: { type: 'string', required: false, enum: ['full', '1/2', '1/3', '2/3', '1/4', '3/4'], default: 'full' },
    dayButtonClassName: { type: 'string', required: false },
    labelClassName: { type: 'string', required: false },
    className: { type: 'string', required: false },
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

export function datePickerRangeInteractions() {
  return {
    onDateChange: { ...baseInteraction(), required: true },
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