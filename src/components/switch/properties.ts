import { baseInteraction, commonProperties, commonPropertiesMapping } from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function switchProperties() {
  return {
    label: { type: 'string', required: false, default: 'Switch' },
    helperText: { type: 'string', required: false },
    required: { type: 'boolean', required: false },
    error: { type: 'string', required: false },
    IGRPGridSize: { type: 'string', required: false, enum: ['full', '1/2', '1/3', '2/3', '1/4', '3/4'], default: 'full' },
    description: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    labelClassName: { type: 'string', required: false },
    className: { type: 'string', required: false },
    ...commonProperties()
  };
}

export function switchPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function switchChildProperties() {
  return {
  };
}

export function switchChildPropertiesMapping() {
  return {
  };
}

export function switchInteractions() {
  return {
    checked: { ...baseInteraction(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.CHECKED), required: true },
    onCheckedChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHECK), required: true },
  };
}

export function switchInteractionsMapping() {
  return {};
}

export function switchVariants() {
  return {};
}
