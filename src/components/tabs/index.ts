import { tabsPropertiesMapping, tabsProperties, tabsVariants } from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { Tabs, TabsList, TabsTrigger, TabsContent, TabsPanel } from "@igrp/igrp-framework-react-design-system";',
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(tabsVariants());
    component.getParentProperties(tabsProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(tabsProperties());
    component.getPropertiesMapping(tabsPropertiesMapping());

    component.loadStates([
      'const [activeTab, setActiveTab] = useState("tab1");',
    ]);

    component.setRenderer(hbsRenderer({
      componentName: 'tabs',
      properties: component.properties,
      id: ''
    }));
  },
};
