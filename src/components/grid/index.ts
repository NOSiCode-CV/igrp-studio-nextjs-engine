import {
  gridPropertiesMapping,
  gridProperties,
  gridVariants,
  gridChildProperties,
  gridChildPropertiesMapping,
} from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(gridVariants())
    component.getProperties(gridProperties());
    component.getPropertiesMapping(gridPropertiesMapping());
    component.getChildProperties(gridChildProperties());
    component.getChildPropertiesMapping(gridChildPropertiesMapping());
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
  },
};

const GRID = 'grid'

export { GRID };