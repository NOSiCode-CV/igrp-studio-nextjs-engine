import { commonPropertiesMapping } from '../../../default/properties';

export function textListItemContentProperties() {
  return {
    content: { type: 'string', required: false, defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
  };
}

export function textListItemContentPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function textListItemContentChildProperties() {
  return {};
}

export function textListItemContentChildPropertiesMapping() {
  return {};
}

export function textListItemContentVariants() {
  return {};
}
