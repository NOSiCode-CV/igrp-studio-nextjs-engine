import {
  baseRules,
  baseStyle, classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';

export function badgeProperties() {
  return {
    //intent: { type: 'string', required: true, default: 'default', enum: ['default', 'secondary', 'success', 'info', 'warning', 'error', 'custom'] },
    color: { type: 'string', required: true, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    variant: { type: 'string', required: false, default: 'solid', enum: ['solid', 'outline', 'soft'] },
    size: { type: 'string', required: false, default: 'md', enum: ['sm', 'md', 'lg'] },
    content: { type: 'string', required: false, default: 'Badge' },
    dot: { type: 'boolean', required: false, default: false },
    //customColor: { type: 'string', required: false },
    iconProperties: {
      type: 'object',
      properties: {
        showIcon: { type: 'boolean', required: false, default: false },
        iconName: { type: 'string', required: false, default: 'Info', 'x-ui-widget': 'icon' },
        iconPlacement: { type: 'string', required: false, enum: ['start', 'end'], default: 'start' },
      },
    },
    badgeClassName: { type: 'string', required: false },
    ...classProperties(),
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

export function badgeStyle() {
  return {
    ...baseStyle()
  }
}

export function badgeRules() {
  return {
    ...baseRules()
  }
}