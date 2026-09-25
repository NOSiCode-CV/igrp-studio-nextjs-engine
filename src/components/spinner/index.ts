import {
  spinnerProperties,
  spinnerPropertiesMapping,
  spinnerVariants,
  spinnerChildProperties,
  spinnerChildPropertiesMapping,
  spinnerStyle,
  spinnerRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('Spinner');
    component.loadVariants(spinnerVariants());
    component.loadGroup('feedback');
    component.loadLabel('Spinner');
    component.getProperties(spinnerProperties());
    component.getPropertiesMapping(spinnerPropertiesMapping());
    component.getChildProperties(spinnerChildProperties());
    component.getChildPropertiesMapping(spinnerChildPropertiesMapping());
    component.getStyle(spinnerStyle());
    component.getRules(spinnerRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const SPINNER = 'spinner';
export { SPINNER };
