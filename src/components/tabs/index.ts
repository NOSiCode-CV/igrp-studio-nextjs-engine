import {
  tabsPropertiesMapping,
  tabsProperties,
  tabsVariants,
  tabsChildProperties,
  tabsChildPropertiesMapping, tabsStyle, tabsRules,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { Tabs, TabsList, TabsTrigger, TabsContent, TabsPanel } from "@igrp/igrp-framework-react-design-system";',
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(tabsVariants());
    component.loadGroup('layout')
    component.loadLabel('Tabs')
    component.getProperties(tabsProperties());
    component.getPropertiesMapping(tabsPropertiesMapping());
    component.getChildProperties(tabsChildProperties()); // TODO: handle a way to fetch parent properties
    component.getChildPropertiesMapping(tabsChildPropertiesMapping());
    component.getStyle(tabsStyle())
    component.getRules(tabsRules())
    component.loadStates([
      {
        state: {
          id: '',
          name: 'activeTab{{id}}',
          type: 'string',
          defaultValue: '{{value}}'
        },
        required: true
      }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const TABS = 'tabs'

export { TABS };