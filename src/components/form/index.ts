import { formPropertiesMapping, formProperties, formVariants } from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(formVariants());
    component.getParentProperties(formProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(formProperties());
    component.getPropertiesMapping(formPropertiesMapping());

    component.loadStates([
      'const [loading, setLoading] = useState(false);',
      'const [disabled, setDisabled] = useState(false);',
      'const [error, setError] = useState("");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};
