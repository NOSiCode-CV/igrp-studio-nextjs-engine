import {
  baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
} from '../../../default/properties';

export function infoItemProperties() {
  return {
    label: { type: 'string', required: true, default: 'Info' },
    text: { type: 'string', required: true, default: 'Lorem ipsum dolor sit amet' },
    colorItem: { type: 'string', required: true, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    variantItem: { type: 'string', required: false, default: 'solid', enum: ['solid', 'outline', 'soft'] },
    iconProperties: {
      type: 'object',
      properties: {
        icon: { type: 'string', required: false, default: 'Info' },
        iconClassName: { type: 'string', required: false },
      },
    },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function infoItemPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function infoItemChildProperties() {
  return {};
}

export function infoItemChildPropertiesMapping() {
  return {};
}

export function infoItemVariants() {
  return {
    solid: "solid",
    outline: "outline",
    soft: "soft",
  };
}

export function infoItemInteractions() {
  return {
  };
}

export function infoItemInteractionsMapping() {
  return {
  };
}

export function infoItemStyle() {
  return {
    ...baseStyle()
  }
}

export function infoItemRules() {
  return {
    ...baseRules()
  }
}