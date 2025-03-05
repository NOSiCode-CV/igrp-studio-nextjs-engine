import { inputPropertiesMapping, inputProperties, inputVariants } from './properties';
import { Component, defaultRenderer, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { Input } from "@igrp/igrp-framework-react-design-system";',
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(inputVariants());
    component.getParentProperties(inputProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(inputProperties());
    component.getPropertiesMapping(inputPropertiesMapping());

    component.loadStates([
      'const [inputValue, setInputValue] = useState("");'
    ]);

    component.setRenderer(hbsRenderer({
      componentName: 'input',
      properties: component.properties,
      id: ''
    }));
  },
};
