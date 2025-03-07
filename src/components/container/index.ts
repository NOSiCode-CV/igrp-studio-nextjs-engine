import {
  containerPropertiesMapping,
  containerProperties,
  containerVariants,
  containerChildProperties, containerChildPropertiesMapping,
} from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(containerVariants())
    component.getProperties(containerProperties());
    component.getPropertiesMapping(containerPropertiesMapping());
    component.getChildProperties(containerChildProperties());
    component.getChildPropertiesMapping(containerChildPropertiesMapping());
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
  },
};

const CONTAINER = 'container'

export { CONTAINER };