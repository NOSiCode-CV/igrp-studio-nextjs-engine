import { formPropertiesMapping, formProperties, formVariants } from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(formVariants())
    component.getParentProperties(formProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(formProperties());
    component.getPropertiesMapping(formPropertiesMapping());
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
  },
};

const FLEX = 'flex'

export { FLEX };