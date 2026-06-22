import {
  menubarContentProperties,
  menubarContentPropertiesMapping,
  menubarContentVariants,
  menubarContentChildProperties,
  menubarContentChildPropertiesMapping,
  menubarContentStyle,
  menubarContentRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { MENUBAR } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPMenubarContent');
    component.loadVariants(menubarContentVariants());
    component.loadParent(MENUBAR);
    component.loadLabel('Menubar Content');
    component.getProperties(menubarContentProperties());
    component.getPropertiesMapping(menubarContentPropertiesMapping());
    component.getChildProperties(menubarContentChildProperties());
    component.getChildPropertiesMapping(menubarContentChildPropertiesMapping());
    component.getStyle(menubarContentStyle());
    component.getRules(menubarContentRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const MENUBAR_CONTENT = 'menubarContent';
export { MENUBAR_CONTENT };
