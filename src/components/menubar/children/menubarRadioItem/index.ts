import {
  menubarRadioItemProperties,
  menubarRadioItemPropertiesMapping,
  menubarRadioItemVariants,
  menubarRadioItemChildProperties,
  menubarRadioItemChildPropertiesMapping,
  menubarRadioItemStyle,
  menubarRadioItemRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { MENUBAR } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPMenubarRadioItem');
    component.loadVariants(menubarRadioItemVariants());
    component.loadParent(MENUBAR);
    component.loadLabel('Menubar Radio Item');
    component.getProperties(menubarRadioItemProperties());
    component.getPropertiesMapping(menubarRadioItemPropertiesMapping());
    component.getChildProperties(menubarRadioItemChildProperties());
    component.getChildPropertiesMapping(menubarRadioItemChildPropertiesMapping());
    component.getStyle(menubarRadioItemStyle());
    component.getRules(menubarRadioItemRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const MENUBAR_RADIO_ITEM = 'menubarRadioItem';
export { MENUBAR_RADIO_ITEM };
