import { inlinePropertiesMapping, inlineProperties, inlineVariants } from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(inlineVariants())
    component.getParentProperties(inlineProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(inlineProperties());
    component.getPropertiesMapping(inlinePropertiesMapping());
    component.loadStates([]);
    component.setRenderer(defaultRenderer({
      componentName: 'inline',
      properties: component.properties,
      id: ''
    }));
  },
};