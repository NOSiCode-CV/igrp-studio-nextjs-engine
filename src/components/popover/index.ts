import {
  popoverProperties,
  popoverPropertiesMapping,
  popoverVariants,
  popoverChildProperties,
  popoverChildPropertiesMapping,
  popoverStyle,
  popoverRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('Popover');
    component.loadVariants(popoverVariants());
    component.loadGroup('overlays');
    component.loadLabel('Popover');
    component.getProperties(popoverProperties());
    component.getPropertiesMapping(popoverPropertiesMapping());
    component.getChildProperties(popoverChildProperties());
    component.getChildPropertiesMapping(popoverChildPropertiesMapping());
    component.getStyle(popoverStyle());
    component.getRules(popoverRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const POPOVER = 'popover';
export { POPOVER };
