import {
  checkboxPropertiesMapping,
  checkboxProperties,
  checkboxVariants,
  checkboxChildProperties,
  checkboxChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { Checkbox } from "@igrp/igrp-framework-react-design-system";',
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(checkboxVariants());
    component.loadIcon('CheckSquare')
    component.loadGroup('formElements')
    component.loadLabel('Checkbox')
    component.getProperties(checkboxProperties());
    component.getPropertiesMapping(checkboxPropertiesMapping());
    component.getChildProperties(checkboxChildProperties()); // TODO: handle a way to fetch parent properties
    component.getChildPropertiesMapping(checkboxChildPropertiesMapping()); // TODO: handle a way to fetch parent properties

    component.loadStates([
      'const [isChecked, setIsChecked] = useState(false);'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const CHECKBOX = 'checkbox'

export { CHECKBOX };