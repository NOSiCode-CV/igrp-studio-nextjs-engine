import { baseInteraction, commonProperties, commonPropertiesMapping, iconProperties } from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function badgeProperties() {
  return {
    intent: { type: 'string', required: true, default: 'default', enum: ['default', 'secondary', 'success', 'info', 'warning', 'error', 'custom'] },
    variant: { type: 'string', required: false, default: 'fill', enum: ['fill', 'outline'] },
    children: { type: 'string', required: true },
    custom: { type: 'string', required: false },
    style: { type: 'string', required: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function badgePropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function badgeChildProperties() {
  return {};
}

export function badgeChildPropertiesMapping() {
  return {};
}

export function badgeVariants() {
  return {
    fill: "fill",
    outline: "outline",
  };
}

export function badgeInteractions() {
  return {
  };
}

export function badgeInteractionsMapping() {
  return {
  };
}