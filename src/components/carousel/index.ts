import {
  carouselPropertiesMapping,
  carouselProperties,
  carouselVariants,
  carouselChildProperties,
  carouselChildPropertiesMapping, carouselStyle, carouselRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('Carousel')
    component.loadVariants(carouselVariants());
    component.loadGroup('dataDisplay')
    component.loadLabel('Carousel')
    component.getProperties(carouselProperties());
    component.getPropertiesMapping(carouselPropertiesMapping());
    component.getChildProperties(carouselChildProperties());
    component.getChildPropertiesMapping(carouselChildPropertiesMapping());
    component.getStyle(carouselStyle())
    component.getRules(carouselRules())
    component.loadStates([
      {
        state: {
          id: '',
          name: 'current{{id}}Index',
          type: 'number',
          defaultValue: '0'
        },
        required: true
      }
    ]);

    component.setRenderer(liquidRenderer);
  },
};

const CAROUSEL = 'carousel'

export { CAROUSEL };