import {
  tooltipProperties,
  tooltipPropertiesMapping,
  tooltipVariants,
  tooltipChildProperties,
  tooltipChildPropertiesMapping,
  tooltipStyle,
  tooltipRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('Tooltip');
    component.loadVariants(tooltipVariants());
    component.loadGroup('feedback');
    component.loadLabel('Tooltip');
    component.getProperties(tooltipProperties());
    component.getPropertiesMapping(tooltipPropertiesMapping());
    component.getChildProperties(tooltipChildProperties());
    component.getChildPropertiesMapping(tooltipChildPropertiesMapping());
    component.getStyle(tooltipStyle());
    component.getRules(tooltipRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const TOOLTIP = 'tooltip';
export { TOOLTIP };
