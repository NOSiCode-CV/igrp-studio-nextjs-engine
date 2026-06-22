import {
  menubarCheckboxItemProperties,
  menubarCheckboxItemPropertiesMapping,
  menubarCheckboxItemVariants,
  menubarCheckboxItemChildProperties,
  menubarCheckboxItemChildPropertiesMapping,
  menubarCheckboxItemStyle,
  menubarCheckboxItemRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { MENUBAR } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPMenubarCheckboxItem');
    component.loadVariants(menubarCheckboxItemVariants());
    component.loadParent(MENUBAR);
    component.loadLabel('Menubar Checkbox Item');
    component.getProperties(menubarCheckboxItemProperties());
    component.getPropertiesMapping(menubarCheckboxItemPropertiesMapping());
    component.getChildProperties(menubarCheckboxItemChildProperties());
    component.getChildPropertiesMapping(menubarCheckboxItemChildPropertiesMapping());
    component.getStyle(menubarCheckboxItemStyle());
    component.getRules(menubarCheckboxItemRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const MENUBAR_CHECKBOX_ITEM = 'menubarCheckboxItem';
export { MENUBAR_CHECKBOX_ITEM };
