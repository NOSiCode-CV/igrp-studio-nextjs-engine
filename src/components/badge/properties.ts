import { baseInteraction, commonProperties, commonPropertiesMapping, iconProperties } from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function badgeProperties() {
  return {
    //intent: { type: 'string', required: true, default: 'default', enum: ['default', 'secondary', 'success', 'info', 'warning', 'error', 'custom'] },
    color: { type: 'string', required: true, default: 'default', enum: ['default', 'primary', 'secondary', 'success', 'error' ] },
    variant: { type: 'string', required: false, default: 'solid', enum: ['solid', 'outline', 'soft'] },
    size: { type: 'string', required: false, default: 'md', enum: ['sm', 'md', 'lg'] },
    children: { type: 'string', required: true },
    customColor: { type: 'string', required: false },
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
    solid: "solid",
    outline: "outline",
    soft: "soft",
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