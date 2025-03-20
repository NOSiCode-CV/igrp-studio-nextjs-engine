import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function iconProperties() {
  return {
    iconName: { type: 'string', required: true, default: 'CheckSquare' },
    size: { type: 'string', required: false, default: '16t' },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function iconPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function iconChildProperties() {
  return {};
}

export function iconChildPropertiesMapping() {
  return {};
}

export function iconVariants() {
  return {};
}
