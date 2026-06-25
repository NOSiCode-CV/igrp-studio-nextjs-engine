import {
  progressProperties,
  progressPropertiesMapping,
  progressVariants,
  progressChildProperties,
  progressChildPropertiesMapping,
  progressStyle,
  progressRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('Progress');
    component.loadVariants(progressVariants());
    component.loadGroup('feedback');
    component.loadLabel('Progress');
    component.getProperties(progressProperties());
    component.getPropertiesMapping(progressPropertiesMapping());
    component.getChildProperties(progressChildProperties());
    component.getChildPropertiesMapping(progressChildPropertiesMapping());
    component.getStyle(progressStyle());
    component.getRules(progressRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const PROGRESS = 'progress';
export { PROGRESS };
