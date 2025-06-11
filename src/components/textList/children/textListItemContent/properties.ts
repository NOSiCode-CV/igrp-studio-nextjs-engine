import { commonPropertiesMapping } from '../../../default/properties';

export function textListItemContentProperties() {
  return {
    content: { type: 'string', required: false },
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
