import { formPropertiesMapping, formProperties, formVariants } from './properties';
import { Component, hbsRenderer } from '../index';
import { formChildProperties, formChildPropertiesMapping } from '../flex/properties';

export default {
  register(component: Component) {
    component.loadImports([
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(formVariants());
    component.loadIcon('Form')
    component.loadGroup('containers')
    component.loadLabel('Form')
    component.getProperties(formProperties());
    component.getPropertiesMapping(formPropertiesMapping());
    component.getChildProperties(formChildProperties());
    component.getPropertiesMapping(formChildPropertiesMapping());

    component.loadStates([
      'const [loading, setLoading] = useState(false);',
      'const [disabled, setDisabled] = useState(false);',
      'const [error, setError] = useState("");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const FORM = 'form'

export { FORM };
