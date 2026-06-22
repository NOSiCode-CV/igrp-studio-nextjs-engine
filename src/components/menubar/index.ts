import {
  menubarProperties,
  menubarPropertiesMapping,
  menubarVariants,
  menubarChildProperties,
  menubarChildPropertiesMapping,
  menubarStyle,
  menubarRules,
} from './properties';
import { Component, liquidRenderer } from '../index';
import { MENUBAR_MENU } from './children/menubarMenu';
import { MENUBAR_TRIGGER } from './children/menubarTrigger';
import { MENUBAR_CONTENT } from './children/menubarContent';
import { MENUBAR_GROUP } from './children/menubarGroup';
import { MENUBAR_SEPARATOR } from './children/menubarSeparator';
import { MENUBAR_LABEL } from './children/menubarLabel';
import { MENUBAR_ITEM } from './children/menubarItem';
import { MENUBAR_SHORTCUT } from './children/menubarShortcut';
import { MENUBAR_CHECKBOX_ITEM } from './children/menubarCheckboxItem';
import { MENUBAR_RADIO_GROUP } from './children/menubarRadioGroup';
import { MENUBAR_RADIO_ITEM } from './children/menubarRadioItem';
import { MENUBAR_SUB } from './children/menubarSub';
import { MENUBAR_SUB_TRIGGER } from './children/menubarSubTrigger';
import { MENUBAR_SUB_CONTENT } from './children/menubarSubContent';
import { MENUBAR_PORTAL } from './children/menubarPortal';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPMenubar');
    component.loadVariants(menubarVariants());
    component.loadGroup('navigation');
    component.loadLabel('Menubar');
    component.getProperties(menubarProperties());
    component.getPropertiesMapping(menubarPropertiesMapping());
    component.getChildProperties(menubarChildProperties());
    component.getChildPropertiesMapping(menubarChildPropertiesMapping());
    component.getStyle(menubarStyle());
    component.getRules(menubarRules());
    component.loadStates([]);

    component.loadChildrenTypes([
      { name: MENUBAR_MENU, isDefault: true },
    ]);
    component.loadAcceptedChildren([
      { name: MENUBAR_MENU, isDefault: true },
    ]);

    component.setRenderer(liquidRenderer);
  },
};

const MENUBAR = 'menubar';
export { MENUBAR };
