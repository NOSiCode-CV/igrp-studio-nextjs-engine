import { sectionPropertiesMapping, sectionProperties, sectionVariants } from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(sectionVariants())
    component.getParentProperties(sectionProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(sectionProperties());
    component.getPropertiesMapping(sectionPropertiesMapping());
    component.loadStates([]);
    component.setRenderer(defaultRenderer({
      componentName: 'section',
      properties: component.properties,
      id: ''
    }));
  },
};