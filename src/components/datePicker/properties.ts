import { baseInteraction, commonProperties, commonPropertiesMapping } from '../default/properties';
import { INTERACTIONS_TYPES } from '../../utils/constants';

export function datePickerProperties() {
  return {
    /*type: { type: 'string', required: false, default: 'date', enum: [
        'date',
        'datetime-local',
        'month',
        'week',
        'time',
    ]},*/
    labelText: { type: 'string', required: false },
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
    data: { ...baseInteraction('[]', INTERACTIONS_TYPES.DATA), required: true },
    onDateChange: { ...baseInteraction(), required: true },
  };
}

export function datePickerInteractionsMapping() {
  return {

  };
}

export function datePickerVariants() {
  return {};
}
