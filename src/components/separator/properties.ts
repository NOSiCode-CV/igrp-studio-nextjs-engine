import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function separatorProperties() {
  return {
    orientation: { type: 'string', required: true, enum: ['vertical', 'horizontal'], default: 'horizontal' },
    className: { type: 'string', required: false, default: 'my-3' },
    ...commonProperties(),
  };
}

export function separatorPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function separatorChildProperties() {
  return {};
}

export function separatorChildPropertiesMapping() {
  return {};
}

export function separatorVariants() {
  return {};
}
