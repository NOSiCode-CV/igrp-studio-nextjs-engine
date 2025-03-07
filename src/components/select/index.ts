import { selectPropertiesMapping, selectProperties, selectVariants } from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { Select, Option } from "@igrp/igrp-framework-react-design-system";',
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(selectVariants());
    component.getParentProperties(selectProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(selectProperties());
    component.getPropertiesMapping(selectPropertiesMapping());

    component.loadStates([
      'const [selectedOption, setSelectedOption] = useState("");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const SELECT = 'select'

export { SELECT };
