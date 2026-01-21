import { baseRules, classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function menuNavigationsItemProperties() {
  return {
    targetRef: { type: 'string', required: true, default: '', 'x-ui-widget': 'ref', 'x-meta': { label: 'Target Component Reference' } },
    label: { type: 'string', required: true, default: 'Menu Item' },
    iconProperties: {
      type: 'object',
      properties: {
        icon: { type: 'string', required: false, default: 'ArrowRight', 'x-ui-widget': 'icon' },
      },
      required: false
    },
    disabled: { type: 'boolean', required: false, default: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function menuNavigationsItemPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function menuNavigationsItemChildProperties() {
  return {};
}

export function menuNavigationsItemChildPropertiesMapping() {
  return {};
}

export function menuNavigationsItemVariants() {
  return {};
}

export function menuNavigationsItemRules() {
  return {
    ...baseRules()
  }
}