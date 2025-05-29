import { baseRules, baseStyle, commonProperties, commonPropertiesMapping } from '../default/properties';

export function carouselProperties() {
  return {
    items: { type: 'array', required: true, items: { type: 'object'} },
    autoPlay: { type: 'boolean', required: false },
    interval: { type: 'number', required: false },
    ...commonProperties(),
  };
}

export function carouselPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function carouselChildProperties() {
  return {
  };
}

export function carouselChildPropertiesMapping() {
  return {
  };
}

export function carouselVariants() {
  return {
    fade: "fade",
    slide: "slide"
  };
}

export function carouselStyle() {
  return {
    ...baseStyle()
  }
}

export function carouselRules() {
  return {
    ...baseRules()
  }
}