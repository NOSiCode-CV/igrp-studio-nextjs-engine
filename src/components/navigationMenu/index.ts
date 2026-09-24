import {
  navigationMenuProperties,
  navigationMenuPropertiesMapping,
  navigationMenuVariants,
  navigationMenuChildProperties,
  navigationMenuChildPropertiesMapping,
  navigationMenuStyle,
  navigationMenuRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('NavigationMenu');
    component.loadVariants(navigationMenuVariants());
    component.loadGroup('navigation');
    component.loadLabel('Navigation Menu');
    component.getProperties(navigationMenuProperties());
    component.getPropertiesMapping(navigationMenuPropertiesMapping());
    component.getChildProperties(navigationMenuChildProperties());
    component.getChildPropertiesMapping(navigationMenuChildPropertiesMapping());
    component.getStyle(navigationMenuStyle());
    component.getRules(navigationMenuRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const NAVIGATION_MENU = 'navigationMenu';
export { NAVIGATION_MENU };
