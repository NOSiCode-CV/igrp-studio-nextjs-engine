import {
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';

export function chatProperties() {
  return {
    apiEndpoint: { type: 'string', required: true, default: 'https://api.igrp.cv/chat' },
    labelDescription: { type: 'string', required: false, default: 'Chat' },
    name: { type: 'string', required: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function chatPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function chatChildProperties() {
  return {};
}

export function chatChildPropertiesMapping() {
  return {};
}

export function chatVariants() {
  return {};
}

export function chatStyle() {
  return {
    ...baseStyle()
  }
}

export function chatRules() {
  return {
    ...baseRules()
  }
}