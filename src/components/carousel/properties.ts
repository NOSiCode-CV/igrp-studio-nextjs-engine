import { CommonProperties } from '../../interfaces/types';

export function carouselProperties() {
  return {
    items: { type: 'array', required: true, items: { type: 'object'} },
    autoPlay: { type: 'boolean', required: false },
    interval: { type: 'number', required: false }
  };
}

export function carouselPropertiesMapping() {
  return {
    items: 'items',
    autoPlay: 'autoPlay',
    interval: 'interval'
  };
}

export function carouselVariants() {
  return {
    fade: "fade",
    slide: "slide"
  };
}
