import {
  menubarSubContentProperties,
  menubarSubContentPropertiesMapping,
  menubarSubContentVariants,
  menubarSubContentChildProperties,
  menubarSubContentChildPropertiesMapping,
  menubarSubContentStyle,
  menubarSubContentRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { MENUBAR } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPMenubarSubContent');
    component.loadVariants(menubarSubContentVariants());
    component.loadParent(MENUBAR);
    component.loadLabel('Menubar Sub Content');
    component.getProperties(menubarSubContentProperties());
    component.getPropertiesMapping(menubarSubContentPropertiesMapping());
    component.getChildProperties(menubarSubContentChildProperties());
    component.getChildPropertiesMapping(menubarSubContentChildPropertiesMapping());
    component.getStyle(menubarSubContentStyle());
    component.getRules(menubarSubContentRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const MENUBAR_SUB_CONTENT = 'menubarSubContent';
export { MENUBAR_SUB_CONTENT };
