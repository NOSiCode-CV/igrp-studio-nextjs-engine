import {
  menubarTriggerProperties,
  menubarTriggerPropertiesMapping,
  menubarTriggerVariants,
  menubarTriggerChildProperties,
  menubarTriggerChildPropertiesMapping,
  menubarTriggerStyle,
  menubarTriggerRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { MENUBAR } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPMenubarTrigger');
    component.loadVariants(menubarTriggerVariants());
    component.loadParent(MENUBAR);
    component.loadLabel('Menubar Trigger');
    component.getProperties(menubarTriggerProperties());
    component.getPropertiesMapping(menubarTriggerPropertiesMapping());
    component.getChildProperties(menubarTriggerChildProperties());
    component.getChildPropertiesMapping(menubarTriggerChildPropertiesMapping());
    component.getStyle(menubarTriggerStyle());
    component.getRules(menubarTriggerRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const MENUBAR_TRIGGER = 'menubarTrigger';
export { MENUBAR_TRIGGER };
