import {
  componentPropertiesMapping,
  componentProperties,
  componentVariants,
  componentChildProperties, componentChildPropertiesMapping, componentInteractions, componentStyle, componentRules,
} from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(componentVariants())
    component.loadGroup('structure')
    component.loadLabel('Component Content')
    component.getProperties(componentProperties());
    component.getPropertiesMapping(componentPropertiesMapping());
    component.getChildProperties(componentChildProperties());
    component.getChildPropertiesMapping(componentChildPropertiesMapping());
    component.getInteractions(componentInteractions());
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
    component.getStyle(componentStyle());
    component.getRules(componentRules());
  },
};

const COMPONENT = 'component'

export { COMPONENT };