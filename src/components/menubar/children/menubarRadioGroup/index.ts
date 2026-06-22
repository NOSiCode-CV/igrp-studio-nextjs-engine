import {
  menubarRadioGroupProperties,
  menubarRadioGroupPropertiesMapping,
  menubarRadioGroupVariants,
  menubarRadioGroupChildProperties,
  menubarRadioGroupChildPropertiesMapping,
  menubarRadioGroupStyle,
  menubarRadioGroupRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { MENUBAR } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPMenubarRadioGroup');
    component.loadVariants(menubarRadioGroupVariants());
    component.loadParent(MENUBAR);
    component.loadLabel('Menubar Radio Group');
    component.getProperties(menubarRadioGroupProperties());
    component.getPropertiesMapping(menubarRadioGroupPropertiesMapping());
    component.getChildProperties(menubarRadioGroupChildProperties());
    component.getChildPropertiesMapping(menubarRadioGroupChildPropertiesMapping());
    component.getStyle(menubarRadioGroupStyle());
    component.getRules(menubarRadioGroupRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const MENUBAR_RADIO_GROUP = 'menubarRadioGroup';
export { MENUBAR_RADIO_GROUP };
