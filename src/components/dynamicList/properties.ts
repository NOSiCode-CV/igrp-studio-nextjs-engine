import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function dynamicListProperties() {
  return {
    data: { type: 'string', required: true, default: 'data' },
    ...commonProperties(),
  };
}

export function dynamicListPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function dynamicListChildProperties() {
  return {};
}

export function dynamicListChildPropertiesMapping() {
  return {};
}

export function dynamicListVariants() {
  return {
  };
}
