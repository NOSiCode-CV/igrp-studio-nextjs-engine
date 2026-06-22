import {
  menubarSeparatorProperties,
  menubarSeparatorPropertiesMapping,
  menubarSeparatorVariants,
  menubarSeparatorChildProperties,
  menubarSeparatorChildPropertiesMapping,
  menubarSeparatorStyle,
  menubarSeparatorRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { MENUBAR } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPMenubarSeparator');
    component.loadVariants(menubarSeparatorVariants());
    component.loadParent(MENUBAR);
    component.loadLabel('Menubar Separator');
    component.getProperties(menubarSeparatorProperties());
    component.getPropertiesMapping(menubarSeparatorPropertiesMapping());
    component.getChildProperties(menubarSeparatorChildProperties());
    component.getChildPropertiesMapping(menubarSeparatorChildPropertiesMapping());
    component.getStyle(menubarSeparatorStyle());
    component.getRules(menubarSeparatorRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const MENUBAR_SEPARATOR = 'menubarSeparator';
export { MENUBAR_SEPARATOR };
