import { stackPropertiesMapping, stackProperties, stackVariants } from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(stackVariants())
    component.getParentProperties(stackProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(stackProperties());
    component.getPropertiesMapping(stackPropertiesMapping());
    component.loadStates([]);
    component.setRenderer(defaultRenderer({
      componentName: 'stack',
      properties: component.properties,
      id: ''
    }));
  },
};