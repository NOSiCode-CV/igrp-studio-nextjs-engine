import {
  baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
} from '../../../default/properties';

export function accordionItemProperties() {
  return {
    title: { type: 'string', required: false, default: 'Text' },
    content: { type: 'string', required: false, default: 'Lorem ipsum dolor sit amet' },
    ...commonProperties(),
  };
}

export function accordionItemPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function accordionItemChildProperties() {
  return {};
}

export function accordionItemChildPropertiesMapping() {
  return {};
}

export function accordionItemVariants() {
  return {};
}

export function accordionItemStyle() {
  return {
    ...baseStyle()
  }
}

export function accordionItemRules() {
  return {
    ...baseRules()
  }
}