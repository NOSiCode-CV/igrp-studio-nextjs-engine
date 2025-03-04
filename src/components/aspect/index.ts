import { aspectPropertiesMapping, aspectProperties } from './properties';
import { Component, defaultRenderer } from '../index';
import { aspectVariants } from './variants';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(aspectVariants())
    component.getParentProperties(aspectProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(aspectProperties());
    component.getPropertiesMapping(aspectPropertiesMapping());
    component.loadStates([]);
    component.setRenderer(defaultRenderer({
      componentName: 'aspect',
      properties: component.properties,
      id: ''
    }));
  },
};