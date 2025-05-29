import { baseRules, baseStyle, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function cardHeaderProperties() {
  return {
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function cardHeaderPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function cardHeaderChildProperties() {
  return {};
}

export function cardHeaderChildPropertiesMapping() {
  return {};
}

export function cardHeaderVariants() {
  return {};
}

export function cardHeaderStyle() {
  return {
    ...baseStyle()
  }
}

export function cardHeaderRules() {
  return {
    ...baseRules()
  }
}