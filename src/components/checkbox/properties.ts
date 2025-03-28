import { baseInteraction, commonProperties, commonPropertiesMapping } from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function checkboxProperties() {
  return {
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    description: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    message: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function checkboxPropertiesMapping() {
  return {
    name: 'name',
    label: 'label',
    description: 'description',
    disabled: 'disabled',
    message: 'message',
    ...commonPropertiesMapping(),
  };
}

export function checkboxChildProperties() {
  return {

  };
}

export function checkboxChildPropertiesMapping() {
  return {

  };
}

export function checkboxInteractions() {
  return {
    checked: { ...baseInteraction(INTERACTIONS_DEFAULTS.NULLABLE, INTERACTIONS_TYPES.CHECKED), required: true },
    onCheckedChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHECK), required: true },
  };
}

export function checkboxInteractionsMapping() {
  return {

  };
}

export function checkboxVariants() {
  return {};
}
