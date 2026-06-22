import {
  menubarMenuProperties,
  menubarMenuPropertiesMapping,
  menubarMenuVariants,
  menubarMenuChildProperties,
  menubarMenuChildPropertiesMapping,
  menubarMenuStyle,
  menubarMenuRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { MENUBAR } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPMenubarMenu');
    component.loadVariants(menubarMenuVariants());
    component.loadParent(MENUBAR);
    component.loadLabel('Menubar Menu');
    component.getProperties(menubarMenuProperties());
    component.getPropertiesMapping(menubarMenuPropertiesMapping());
    component.getChildProperties(menubarMenuChildProperties());
    component.getChildPropertiesMapping(menubarMenuChildPropertiesMapping());
    component.getStyle(menubarMenuStyle());
    component.getRules(menubarMenuRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const MENUBAR_MENU = 'menubarMenu';
export { MENUBAR_MENU };
