import {
  tabsPropertiesMapping,
  tabsProperties,
  tabsVariants,
  tabsChildProperties,
  tabsChildPropertiesMapping,
  tabsStyle,
  tabsRules,
  tabsData, tabsInteractions,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { TABS_ITEM } from './children/tabsItem/index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPTabs');
    component.loadVariants(tabsVariants());
    component.loadGroup('layout');
    component.loadLabel('Tabs');
    component.getProperties(tabsProperties());
    component.getPropertiesMapping(tabsPropertiesMapping());
    component.getChildProperties(tabsChildProperties());
    component.getChildPropertiesMapping(tabsChildPropertiesMapping());
    component.getInteractions(tabsInteractions());
    component.getStyle(tabsStyle());
    component.getRules(tabsRules());
    component.getData(tabsData());
    component.loadStates([
    ]);
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: TABS }))

    component.loadChildrenTypes([
      { name: TABS_ITEM, isDefault: true }
    ]);

    component.loadAcceptedChildren([
      { name: TABS_ITEM, isDefault: true }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const TABS = 'tabs';

export { TABS };
