import {
  flexPropertiesMapping,
  flexProperties,
  flexVariants,
  flexChildProperties,
  flexChildPropertiesMapping, flexStyle, flexRules,
} from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(flexVariants())
    component.loadGroup('structure')
    component.loadLabel('Flex')
    component.getProperties(flexProperties());
    component.getPropertiesMapping(flexPropertiesMapping());
    component.getChildProperties(flexChildProperties());
    component.getChildPropertiesMapping(flexChildPropertiesMapping());
    component.loadStates([]);
    component.getStyle(flexStyle())
    component.getRules(flexRules())
    component.setRenderer(defaultRenderer);
  },
};

const FLEX = 'flex'

export { FLEX };