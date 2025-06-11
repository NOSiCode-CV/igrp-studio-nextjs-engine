import {
  baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
} from '../../../default/properties';

export function infoSectionProperties() {
  return {
  };
}

export function infoSectionPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function infoSectionChildProperties() {
  return {};
}

export function infoSectionChildPropertiesMapping() {
  return {};
}

export function infoSectionVariants() {
  return {
    solid: "solid",
    outline: "outline",
    soft: "soft",
  };
}

export function infoSectionInteractions() {
  return {
  };
}

export function infoSectionInteractionsMapping() {
  return {
  };
}

export function infoSectionStyle() {
  return {
    ...baseStyle()
  }
}

export function infoSectionRules() {
  return {
    ...baseRules()
  }
}