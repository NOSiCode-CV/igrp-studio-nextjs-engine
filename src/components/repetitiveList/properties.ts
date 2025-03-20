import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function repetitiveListProperties() {
  return {
    data: { type: 'string', required: true, default: 'data' },
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
