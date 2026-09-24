import {
  toggleProperties,
  togglePropertiesMapping,
  toggleVariants,
  toggleChildProperties,
  toggleChildPropertiesMapping,
  toggleStyle,
  toggleRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('Toggle');
    component.loadVariants(toggleVariants());
    component.loadGroup('forms');
    component.loadLabel('Toggle');
    component.getProperties(toggleProperties());
    component.getPropertiesMapping(togglePropertiesMapping());
    component.getChildProperties(toggleChildProperties());
    component.getChildPropertiesMapping(toggleChildPropertiesMapping());
    component.getStyle(toggleStyle());
    component.getRules(toggleRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const TOGGLE = 'toggle';
export { TOGGLE };
