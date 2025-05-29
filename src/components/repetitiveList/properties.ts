import { baseRules, baseStyle, commonProperties, commonPropertiesMapping } from '../default/properties';

export function repetitiveListProperties() {
  return {
    items: { type: 'array', items: { type: 'object' }, required: true },
    ...commonProperties(),
  };
}

export function repetitiveListPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function repetitiveListChildProperties() {
  return {};
}

export function repetitiveListChildPropertiesMapping() {
  return {};
}

export function repetitiveListVariants() {
  return {
  };
}

export function repetitiveListStyle() {
  return {
    ...baseStyle()
  }
}

export function repetitiveListRules() {
  return {
    ...baseRules()
  }
}
