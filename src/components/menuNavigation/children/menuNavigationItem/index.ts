import {
  menuNavigationsItemPropertiesMapping,
  menuNavigationsItemProperties,
  menuNavigationsItemVariants,
  menuNavigationsItemChildProperties,
  menuNavigationsItemChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { MENU_NAVIGATION } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPMenuNavigationItem } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(menuNavigationsItemVariants());
    component.loadParent(MENU_NAVIGATION)
    component.loadLabel('Menu Navigation Item')
    component.getProperties(menuNavigationsItemProperties());
    component.getPropertiesMapping(menuNavigationsItemPropertiesMapping());
    component.getChildProperties(menuNavigationsItemChildProperties());
    component.getChildPropertiesMapping(menuNavigationsItemChildPropertiesMapping());

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const MENU_NAVIGATION_ITEM = 'menuNavigationItem'

export { MENU_NAVIGATION_ITEM };