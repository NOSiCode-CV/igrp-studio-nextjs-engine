import {
  menubarSubProperties,
  menubarSubPropertiesMapping,
  menubarSubVariants,
  menubarSubChildProperties,
  menubarSubChildPropertiesMapping,
  menubarSubStyle,
  menubarSubRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { MENUBAR } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPMenubarSub');
    component.loadVariants(menubarSubVariants());
    component.loadParent(MENUBAR);
    component.loadLabel('Menubar Sub');
    component.getProperties(menubarSubProperties());
    component.getPropertiesMapping(menubarSubPropertiesMapping());
    component.getChildProperties(menubarSubChildProperties());
    component.getChildPropertiesMapping(menubarSubChildPropertiesMapping());
    component.getStyle(menubarSubStyle());
    component.getRules(menubarSubRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const MENUBAR_SUB = 'menubarSub';
export { MENUBAR_SUB };
