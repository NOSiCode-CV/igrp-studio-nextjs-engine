import {
  aspectPropertiesMapping,
  aspectProperties,
  aspectVariants,
  aspectChildProperties,
  aspectChildPropertiesMapping,
} from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadGroup('structure');
    component.loadLabel('Aspect');
    component.loadVariants(aspectVariants())
    component.getProperties(aspectProperties());
    component.getPropertiesMapping(aspectPropertiesMapping());
    component.getChildProperties(aspectChildProperties());
    component.getChildPropertiesMapping(aspectChildPropertiesMapping());
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
  },
};

const ASPECT = 'aspect'

export { ASPECT };