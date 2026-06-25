import {
  emptyProperties,
  emptyPropertiesMapping,
  emptyVariants,
  emptyChildProperties,
  emptyChildPropertiesMapping,
  emptyStyle,
  emptyRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('Empty');
    component.loadVariants(emptyVariants());
    component.loadGroup('feedback');
    component.loadLabel('Empty State');
    component.getProperties(emptyProperties());
    component.getPropertiesMapping(emptyPropertiesMapping());
    component.getChildProperties(emptyChildProperties());
    component.getChildPropertiesMapping(emptyChildPropertiesMapping());
    component.getStyle(emptyStyle());
    component.getRules(emptyRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const EMPTY = 'empty';
export { EMPTY };
