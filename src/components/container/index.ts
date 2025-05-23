import {
  containerPropertiesMapping,
  containerProperties,
  containerVariants,
  containerChildProperties, containerChildPropertiesMapping, containerStyle,
} from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(containerVariants())
    component.loadGroup('structure')
    component.loadCustomClassName('')
    component.loadLabel('Container')
    component.getProperties(containerProperties());
    component.getPropertiesMapping(containerPropertiesMapping());
    component.getChildProperties(containerChildProperties());
    component.getChildPropertiesMapping(containerChildPropertiesMapping());
    component.getStyle(containerStyle());
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
  },
};

const CONTAINER = 'container'

export { CONTAINER };