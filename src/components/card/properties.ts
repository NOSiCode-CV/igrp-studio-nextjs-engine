import { baseRules, baseStyle, commonProperties, commonPropertiesMapping } from '../default/properties';

export function cardProperties() {
  return {
    className: { type: 'string', required: false },
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