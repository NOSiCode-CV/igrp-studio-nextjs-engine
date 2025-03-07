import {
  stackPropertiesMapping,
  stackProperties,
  stackVariants,
  stackChildProperties,
  stackChildPropertiesMapping,
} from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(stackVariants())
    component.loadIcon('')
    component.loadGroup('structure')
    component.loadLabel('Stack')
    component.getProperties(stackProperties());
    component.getPropertiesMapping(stackPropertiesMapping());
    component.getChildProperties(stackChildProperties());
    component.getChildPropertiesMapping(stackChildPropertiesMapping());
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
  },
};

const STACK = 'stack'

export { STACK };