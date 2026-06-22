import {
  menubarItemProperties,
  menubarItemPropertiesMapping,
  menubarItemVariants,
  menubarItemChildProperties,
  menubarItemChildPropertiesMapping,
  menubarItemStyle,
  menubarItemRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { MENUBAR } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPMenubarItem');
    component.loadVariants(menubarItemVariants());
    component.loadParent(MENUBAR);
    component.loadLabel('Menubar Item');
    component.getProperties(menubarItemProperties());
    component.getPropertiesMapping(menubarItemPropertiesMapping());
    component.getChildProperties(menubarItemChildProperties());
    component.getChildPropertiesMapping(menubarItemChildPropertiesMapping());
    component.getStyle(menubarItemStyle());
    component.getRules(menubarItemRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const MENUBAR_ITEM = 'menubarItem';
export { MENUBAR_ITEM };
