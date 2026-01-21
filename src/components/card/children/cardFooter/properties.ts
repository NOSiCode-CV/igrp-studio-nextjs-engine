import {
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../../../default/properties';

export function cardFooterProperties() {
  return {
    ...classProperties(),
    ...commonProperties(),
  };
}

export function cardFooterPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function cardFooterChildProperties() {
  return {};
}

export function cardFooterChildPropertiesMapping() {
  return {};
}

export function cardFooterVariants() {
  return {};
}

export function cardFooterStyle() {
  return {
    ...baseStyle()
  }
}

export function cardFooterRules() {
  return {
    ...baseRules()
  }
}