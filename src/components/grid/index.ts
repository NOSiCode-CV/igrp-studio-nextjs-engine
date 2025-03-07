import { gridPropertiesMapping, gridProperties, gridVariants } from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(gridVariants())
    component.getParentProperties(gridProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(gridProperties());
    component.getPropertiesMapping(gridPropertiesMapping());
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
  },
};

const GRID = 'grid'

export { GRID };