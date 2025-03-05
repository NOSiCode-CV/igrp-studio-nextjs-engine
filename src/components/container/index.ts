import { containerPropertiesMapping, containerProperties, containerVariants } from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(containerVariants())
    component.getParentProperties(containerProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(containerProperties());
    component.getPropertiesMapping(containerPropertiesMapping());
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
  },
};