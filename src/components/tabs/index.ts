import {
  tabsPropertiesMapping,
  tabsProperties,
  tabsVariants,
  tabsChildProperties,
  tabsChildPropertiesMapping,
  tabsStyle,
  tabsRules,
  tabsData,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { TABS_ITEM } from './children/tabsItem/index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPTabs } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadComponentClass('IGRPTabs');
    component.loadVariants(tabsVariants());
    component.loadGroup('layout');
    component.loadLabel('Tabs');
    component.getProperties(tabsProperties());
    component.getPropertiesMapping(tabsPropertiesMapping());
    component.getChildProperties(tabsChildProperties());
    component.getChildPropertiesMapping(tabsChildPropertiesMapping());
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
