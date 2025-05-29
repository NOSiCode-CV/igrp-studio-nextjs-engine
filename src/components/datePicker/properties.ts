import {
  baseData,
  baseInteraction,
  baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function datePickerProperties() {
  return {
    /*type: { type: 'string', required: false, default: 'date', enum: [
        'date',
        'datetime-local',
        'month',
        'week',
        'time',
    ]},*/
    label: { type: 'string', required: false },
    placeholder: { type: 'string', required: false, default: 'Enter the date' },
    dateFormat: { type: 'string', required: false, default: 'dd/MM/yyyy' },
    locale: { type: 'string', required: false, default: 'pt' },
    iconPlacement: { type: 'string', required: false, default: 'start' },
    //floatingLabel: { type: 'boolean', required: false },
    required: { type: 'boolean', required: false },
    disabled: { type: 'boolean', required: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function datePickerPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function datePickerChildProperties() {
  return {};
}

export function datePickerChildPropertiesMapping() {
  return {};
}

export function datePickerInteractions() {
  return {
    onDateChange: { ...baseInteraction(), required: true },
  };
}

export function datePickerInteractionsMapping() {
  return {

  };
}

export function datePickerData() {
  return {
    data: { ...baseData(INTERACTIONS_DEFAULTS.EMPTY_ARRAY, INTERACTIONS_TYPES.DATA), required: true },
  };
}

export function datePickerVariants() {
  return {};
}

export function datePickerStyle() {
  return {
    ...baseStyle()
  }
}

export function datePickerRules() {
  return {
    ...baseRules()
  }
}