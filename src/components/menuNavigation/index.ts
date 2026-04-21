import {
  menuNavigationPropertiesMapping,
  menuNavigationProperties,
  menuNavigationVariants,
  menuNavigationChildProperties,
  menuNavigationChildPropertiesMapping,
  menuNavigationStyle,
  menuNavigationRules,
  menuNavigationData, menuNavigationInteractions,
} from './properties';
import { Component, liquidRenderer } from '../index';
import { MENU_NAVIGATION_ITEM } from './children/menuNavigationItem/index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPMenuNavigation');
    component.loadVariants(menuNavigationVariants());
    component.loadGroup('layout');
    component.loadLabel('Menu Navigation');
    component.getProperties(menuNavigationProperties());
    component.getPropertiesMapping(menuNavigationPropertiesMapping());
    component.getChildProperties(menuNavigationChildProperties());
    component.getChildPropertiesMapping(menuNavigationChildPropertiesMapping());
    component.getStyle(menuNavigationStyle());
    component.getRules(menuNavigationRules());
    component.getData(menuNavigationData());
    component.getInteractions(menuNavigationInteractions());
    component.loadStates([
    ]);

    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: MENU_NAVIGATION }))

    component.loadChildrenTypes([
      { name: MENU_NAVIGATION_ITEM, isDefault: true }
    ]);

    component.loadAcceptedChildren([
      { name: MENU_NAVIGATION_ITEM, isDefault: true }
    ]);

    component.setRenderer(liquidRenderer);
  },
};

const MENU_NAVIGATION = 'menuNavigation';

export { MENU_NAVIGATION };
