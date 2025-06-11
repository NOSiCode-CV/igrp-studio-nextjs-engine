import { commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function textListsSubItemProperties() {
  return {
    id: { type: 'string', required: false },
    variant: { type: 'string', required: false, default: 'solid', enum: ['solid', 'outline', 'soft'] },
    completed: { type: 'boolean', default: false, required: false},
    disabled: { type: 'boolean', default: false, required: false},
    iconProperties: {
      type: 'object',
      properties: {
        icon: { type: 'string', required: false },
        iconColor: { type: 'string', required: false, default: 'solid', enum: ['solid', 'outline', 'soft'] },
      },
    },
    badgeText: { type: 'string', required: false, default: 'Menu' },
    badgeVariant: { type: 'string', required: false, default: 'solid', enum: ['solid', 'outline', 'soft'] },
    badgeColor: { type: 'string', required: true, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    ...commonProperties(),
  };
}

export function textListsSubItemPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function textListsSubItemChildProperties() {
  return {};
}

export function textListsSubItemChildPropertiesMapping() {
  return {};
}

export function textListsSubItemVariants() {
  return {};
}
