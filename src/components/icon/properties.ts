import {
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';

export function iconProperties() {
  return {
    iconName: { type: 'string', required: true, default: 'Heart', 'x-ui-widget': 'icon' },
    size: { type: 'string', required: false, default: '24' },
    ...classProperties(),
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