import {
  stepperUIProperties,
  stepperUIPropertiesMapping,
  stepperUIVariants,
  stepperUIChildProperties,
  stepperUIChildPropertiesMapping,
  stepperUIStyle,
  stepperUIRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('Stepper');
    component.loadVariants(stepperUIVariants());
    component.loadGroup('navigation');
    component.loadLabel('Stepper (UI)');
    component.getProperties(stepperUIProperties());
    component.getPropertiesMapping(stepperUIPropertiesMapping());
    component.getChildProperties(stepperUIChildProperties());
    component.getChildPropertiesMapping(stepperUIChildPropertiesMapping());
    component.getStyle(stepperUIStyle());
    component.getRules(stepperUIRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const STEPPER_UI = 'stepperUI';
export { STEPPER_UI };
