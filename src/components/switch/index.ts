import { switchPropertiesMapping, switchProperties, switchVariants } from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { Switch } from "@igrp/igrp-framework-react-design-system";',
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(switchVariants());
    component.getParentProperties(switchProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(switchProperties());
    component.getPropertiesMapping(switchPropertiesMapping());

    component.loadStates([
      'const [isChecked, setIsChecked] = useState(false);'
    ]);

    component.setRenderer(hbsRenderer);
  },
};
