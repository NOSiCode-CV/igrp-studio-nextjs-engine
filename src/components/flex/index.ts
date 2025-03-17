import {
  formPropertiesMapping,
  formProperties,
  formVariants,
  formChildProperties,
  formChildPropertiesMapping,
} from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(formVariants())
    component.loadGroup('structure')
    component.loadLabel('Flex')
    component.getProperties(formProperties());
    component.getPropertiesMapping(formPropertiesMapping());
    component.getChildProperties(formChildProperties());
    component.getChildPropertiesMapping(formChildPropertiesMapping());
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
  },
};

const FLEX = 'flex'

export { FLEX };