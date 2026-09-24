import {
  menubarSubTriggerProperties,
  menubarSubTriggerPropertiesMapping,
  menubarSubTriggerVariants,
  menubarSubTriggerChildProperties,
  menubarSubTriggerChildPropertiesMapping,
  menubarSubTriggerStyle,
  menubarSubTriggerRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { MENUBAR } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPMenubarSubTrigger');
    component.loadVariants(menubarSubTriggerVariants());
    component.loadParent(MENUBAR);
    component.loadLabel('Menubar Sub Trigger');
    component.getProperties(menubarSubTriggerProperties());
    component.getPropertiesMapping(menubarSubTriggerPropertiesMapping());
    component.getChildProperties(menubarSubTriggerChildProperties());
    component.getChildPropertiesMapping(menubarSubTriggerChildPropertiesMapping());
    component.getStyle(menubarSubTriggerStyle());
    component.getRules(menubarSubTriggerRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const MENUBAR_SUB_TRIGGER = 'menubarSubTrigger';
export { MENUBAR_SUB_TRIGGER };
