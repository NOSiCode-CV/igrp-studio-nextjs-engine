import {
  baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
} from '../../../default/properties';

export function cardDetailsItemProperties() {
  return {
    label: { type: 'string', required: false, default: 'Text' },
    content: { type: 'string', required: false },
    value: { type: 'string', required: false, default: 'Lorem ipsum dolor sit amet' },
    showCopyTo: { type: 'boolean', required: false },
    ...commonProperties(),
  };
}

export function cardDetailsItemPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function cardDetailsItemChildProperties() {
  return {};
}

export function cardDetailsItemChildPropertiesMapping() {
  return {};
}

export function cardDetailsItemVariants() {
  return {};
}

export function cardDetailsItemStyle() {
  return {
    ...baseStyle()
  }
}

export function cardDetailsItemRules() {
  return {
    ...baseRules()
  }
}