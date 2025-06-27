import {
  baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
  } from '../default/properties';

export function statusBannerProperties() {
  return {
    color: { type: 'string', required: true, default: 'success', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    variant: { type: 'string', required: false, default: 'soft', enum: ['solid', 'outline', 'soft'] },
    text: { type: 'string', required: false, default: 'Status Banner' },
    badgeColor: { type: 'string', required: true, default: 'secondary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    badgeVariant: { type: 'string', required: false, default: 'solid', enum: ['solid', 'outline', 'soft'] },
    badgeText: { type: 'string', required: false, default: 'Status Banner' },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function statusBannerPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function statusBannerChildProperties() {
  return {};
}

export function statusBannerChildPropertiesMapping() {
  return {};
}

export function statusBannerVariants() {
  return {
    solid: "solid",
    outline: "outline",
    soft: "soft",
  };
}

export function statusBannerInteractions() {
  return {
  };
}

export function statusBannerInteractionsMapping() {
  return {
  };
}

export function statusBannerStyle() {
  return {
    ...baseStyle()
  }
}

export function statusBannerRules() {
  return {
    ...baseRules()
  }
}