import { baseRules, baseStyle, commonProperties, commonPropertiesMapping } from '../default/properties';

export function iconProperties() {
  return {
    name: { type: 'string', required: true, default: 'Heart' },
    size: { type: 'string', required: false, default: '24' },
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

export function iconStyle() {
  return {
    ...baseStyle()
  }
}

export function iconRules() {
  return {
    ...baseRules()
  }
}