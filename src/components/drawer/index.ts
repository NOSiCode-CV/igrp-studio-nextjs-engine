import {
  drawerProperties,
  drawerPropertiesMapping,
  drawerVariants,
  drawerChildProperties,
  drawerChildPropertiesMapping,
  drawerStyle,
  drawerRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('Drawer');
    component.loadVariants(drawerVariants());
    component.loadGroup('overlays');
    component.loadLabel('Drawer');
    component.getProperties(drawerProperties());
    component.getPropertiesMapping(drawerPropertiesMapping());
    component.getChildProperties(drawerChildProperties());
    component.getChildPropertiesMapping(drawerChildPropertiesMapping());
    component.getStyle(drawerStyle());
    component.getRules(drawerRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const DRAWER = 'drawer';
export { DRAWER };
