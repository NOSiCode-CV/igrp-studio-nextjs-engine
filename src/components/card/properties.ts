import {
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';

export function cardProperties() {
  return {
    ...classProperties(),
    ...commonProperties(),
  };
}

export function cardPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function cardChildProperties() {
  return {

  };
}

export function cardChildPropertiesMapping() {
  return {

  };
}


export function cardVariants() {
  return {};
}

export function cardStyle() {
  return {
    ...baseStyle()
  }
}

export function cardRules() {
  return {
    ...baseRules()
  }
}