import { radioGroupPropertiesMapping, radioGroupProperties, radioGroupVariants } from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { RadioGroup, Radio } from "@igrp/igrp-framework-react-design-system";',
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(radioGroupVariants());
    component.getParentProperties(radioGroupProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(radioGroupProperties());
    component.getPropertiesMapping(radioGroupPropertiesMapping());

    component.loadStates([
      'const [selectedRadio, setSelectedRadio] = useState("");'
    ]);

    component.setRenderer(hbsRenderer({
      componentName: 'radio',
      properties: component.properties,
      id: ''
    }));
  },
};
