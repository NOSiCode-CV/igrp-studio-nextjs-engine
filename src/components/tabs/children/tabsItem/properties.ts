import { baseRules, classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function tabsItemProperties() {
  return {
    value: { type: 'string', required: true, default: '{{id}}' },
    label: { type: 'string', required: true, default: 'Tab' },
    iconProperties: {
      type: 'object',
      properties: {
        icon: { type: 'string', required: false, default: 'ArrowRight', 'x-ui-widget': 'icon' },
      },
      required: false
    },
    disabled: { type: 'boolean', required: false, default: false },
    badgeContent: { type: 'string', required: false },
    badgeVariant: { type: 'string', required: false, default: 'solid', enum: ['solid', 'outline', 'soft'] },
    badgeColor: { type: 'string', required: false, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    badgeClassName: { type: 'string', required: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function tabsItemRules() {
  return {
    ...baseRules()
  }
}

export function tabsItemPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function tabsItemChildProperties() {
  return {};
}

export function tabsItemChildPropertiesMapping() {
  return {};
}

export function tabsItemVariants() {
  return {};
}
