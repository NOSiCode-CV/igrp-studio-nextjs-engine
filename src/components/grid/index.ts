import {
  gridPropertiesMapping,
  gridProperties,
  gridVariants,
  gridChildProperties,
  gridChildPropertiesMapping, gridStyle,
} from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(gridVariants())
    component.loadGroup('structure')
    component.loadLabel('Grid')
    component.getProperties(gridProperties());
    component.getPropertiesMapping(gridPropertiesMapping());
    component.getChildProperties(gridChildProperties());
    component.getChildPropertiesMapping(gridChildPropertiesMapping());
    component.loadStates([]);
    component.getStyle(gridStyle())
    component.setRenderer(defaultRenderer);
  },
};

const GRID = 'grid'

export { GRID };