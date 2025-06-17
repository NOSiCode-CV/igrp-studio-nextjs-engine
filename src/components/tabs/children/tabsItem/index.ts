import {
  tabsItemPropertiesMapping,
  tabsItemProperties,
  tabsItemVariants,
  tabsItemChildProperties,
  tabsItemChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { TABS } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPTabItem')
    component.loadVariants(tabsItemVariants());
    component.loadParent(TABS)
    component.loadLabel('Tabs Item')
    component.getProperties(tabsItemProperties());
    component.getPropertiesMapping(tabsItemPropertiesMapping());
    component.getChildProperties(tabsItemChildProperties());
    component.getChildPropertiesMapping(tabsItemChildPropertiesMapping());

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABS_ITEM = 'tabsItem'

export { TABS_ITEM };