import {
  loadingSpinnerProperties,
  loadingSpinnerPropertiesMapping,
  loadingSpinnerVariants,
  loadingSpinnerChildProperties,
  loadingSpinnerChildPropertiesMapping,
  loadingSpinnerStyle,
  loadingSpinnerRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPLoadingSpinner');
    component.loadVariants(loadingSpinnerVariants());
    component.loadGroup('feedback');
    component.loadLabel('Loading Spinner');
    component.getProperties(loadingSpinnerProperties());
    component.getPropertiesMapping(loadingSpinnerPropertiesMapping());
    component.getChildProperties(loadingSpinnerChildProperties());
    component.getChildPropertiesMapping(loadingSpinnerChildPropertiesMapping());
    component.getStyle(loadingSpinnerStyle());
    component.getRules(loadingSpinnerRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const LOADING_SPINNER = 'loadingSpinner';
export { LOADING_SPINNER };
