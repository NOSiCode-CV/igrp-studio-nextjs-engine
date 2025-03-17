import { textareaPropertiesMapping, textareaProperties, textareaVariants, textareaChildProperties } from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { Textarea } from "@igrp/igrp-framework-react-design-system";',
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(textareaVariants());
    component.loadGroup('formElements')
    component.loadLabel('Text Area')
    component.getProperties(textareaProperties());
    component.getPropertiesMapping(textareaPropertiesMapping());
    component.getChildProperties(textareaChildProperties()); // TODO: handle a way to fetch parent properties
    component.getChildPropertiesMapping(textareaChildProperties()); // TODO: handle a way to fetch parent properties

    component.loadStates([
      'const [textValue, setTextValue] = useState("");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const TEXTAREA = 'textarea'

export { TEXTAREA };