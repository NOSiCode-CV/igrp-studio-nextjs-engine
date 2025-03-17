import {
  switchPropertiesMapping,
  switchProperties,
  switchVariants,
  switchChildProperties,
  switchChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { Switch } from "@igrp/igrp-framework-react-design-system";',
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(switchVariants());
    component.loadGroup('formElements')
    component.loadLabel('Switch')
    component.getProperties(switchProperties());
    component.getPropertiesMapping(switchPropertiesMapping());
    component.getChildProperties(switchChildProperties());
    component.getChildPropertiesMapping(switchChildPropertiesMapping());

    component.loadStates([
      'const [isChecked, setIsChecked] = useState(false);'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const SWITCH = 'switch'

export { SWITCH };
