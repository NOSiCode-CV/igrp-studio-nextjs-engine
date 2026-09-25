import {
  menubarPortalProperties,
  menubarPortalPropertiesMapping,
  menubarPortalVariants,
  menubarPortalChildProperties,
  menubarPortalChildPropertiesMapping,
  menubarPortalStyle,
  menubarPortalRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { MENUBAR } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPMenubarPortal');
    component.loadVariants(menubarPortalVariants());
    component.loadParent(MENUBAR);
    component.loadLabel('Menubar Portal');
    component.getProperties(menubarPortalProperties());
    component.getPropertiesMapping(menubarPortalPropertiesMapping());
    component.getChildProperties(menubarPortalChildProperties());
    component.getChildPropertiesMapping(menubarPortalChildPropertiesMapping());
    component.getStyle(menubarPortalStyle());
    component.getRules(menubarPortalRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const MENUBAR_PORTAL = 'menubarPortal';
export { MENUBAR_PORTAL };
