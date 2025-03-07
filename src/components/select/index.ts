import {
  selectPropertiesMapping,
  selectProperties,
  selectVariants,
  selectChildProperties,
  selectChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { Select, Option } from "@igrp/igrp-framework-react-design-system";',
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(selectVariants());
    component.loadIcon('List')
    component.loadGroup('formElements')
    component.loadLabel('Select')
    component.getProperties(selectProperties());
    component.getPropertiesMapping(selectPropertiesMapping());
    component.getChildProperties(selectChildProperties());
    component.getChildPropertiesMapping(selectChildPropertiesMapping());

    component.loadStates([
      'const [selectedOption, setSelectedOption] = useState("");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const SELECT = 'select'

export { SELECT };
