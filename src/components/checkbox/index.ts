import { checkboxPropertiesMapping, checkboxProperties, checkboxVariants } from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { Checkbox } from "@igrp/igrp-framework-react-design-system";',
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(checkboxVariants());
    component.getParentProperties(checkboxProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(checkboxProperties());
    component.getPropertiesMapping(checkboxPropertiesMapping());

    component.loadStates([
      'const [isChecked, setIsChecked] = useState(false);'
    ]);

    component.setRenderer(hbsRenderer({
      componentName: 'checkbox',
      properties: component.properties,
      id: ''
    }));
  },
};
