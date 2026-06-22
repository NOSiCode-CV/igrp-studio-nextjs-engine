import {
  menubarGroupProperties,
  menubarGroupPropertiesMapping,
  menubarGroupVariants,
  menubarGroupChildProperties,
  menubarGroupChildPropertiesMapping,
  menubarGroupStyle,
  menubarGroupRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { MENUBAR } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPMenubarGroup');
    component.loadVariants(menubarGroupVariants());
    component.loadParent(MENUBAR);
    component.loadLabel('Menubar Group');
    component.getProperties(menubarGroupProperties());
    component.getPropertiesMapping(menubarGroupPropertiesMapping());
    component.getChildProperties(menubarGroupChildProperties());
    component.getChildPropertiesMapping(menubarGroupChildPropertiesMapping());
    component.getStyle(menubarGroupStyle());
    component.getRules(menubarGroupRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const MENUBAR_GROUP = 'menubarGroup';
export { MENUBAR_GROUP };
