import {
  menubarShortcutProperties,
  menubarShortcutPropertiesMapping,
  menubarShortcutVariants,
  menubarShortcutChildProperties,
  menubarShortcutChildPropertiesMapping,
  menubarShortcutStyle,
  menubarShortcutRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { MENUBAR } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPMenubarShortcut');
    component.loadVariants(menubarShortcutVariants());
    component.loadParent(MENUBAR);
    component.loadLabel('Menubar Shortcut');
    component.getProperties(menubarShortcutProperties());
    component.getPropertiesMapping(menubarShortcutPropertiesMapping());
    component.getChildProperties(menubarShortcutChildProperties());
    component.getChildPropertiesMapping(menubarShortcutChildPropertiesMapping());
    component.getStyle(menubarShortcutStyle());
    component.getRules(menubarShortcutRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const MENUBAR_SHORTCUT = 'menubarShortcut';
export { MENUBAR_SHORTCUT };
