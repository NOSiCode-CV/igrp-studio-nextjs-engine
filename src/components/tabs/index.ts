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

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPTabs } from "@igrp/igrp-framework-react-design-system";',
      'import { IGRPTabItem } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadComponentClass('IGRPTabs');
    component.loadVariants(tabsVariants());
    component.loadGroup('layout');
    component.loadLabel('Tabs');
    component.getProperties(tabsProperties());
    component.getPropertiesMapping(tabsPropertiesMapping());
    component.getChildProperties(tabsChildProperties()); // TODO: handle a way to fetch parent properties
    component.getChildPropertiesMapping(tabsChildPropertiesMapping());
    component.getStyle(tabsStyle());
    component.getRules(tabsRules());
    component.getData(tabsData());
    component.loadStates([
      {
        state: {
          id: '',
          name: 'tabs{{id}}Items',
          type: 'IGRPTabItem[]',
          defaultValue: '[]',
        },
        required: true,
      },
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const TABS = 'tabs';

export { TABS };
