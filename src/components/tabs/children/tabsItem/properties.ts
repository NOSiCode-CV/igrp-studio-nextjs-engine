import { commonProperties, commonPropertiesMapping } from '../../../default/properties';

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
    ...commonProperties(),
  };
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
