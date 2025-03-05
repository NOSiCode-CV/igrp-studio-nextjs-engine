import { textareaPropertiesMapping, textareaProperties, textareaVariants } from './properties';
import { Component, defaultRenderer, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { Textarea } from "@igrp/igrp-framework-react-design-system";',
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(textareaVariants());
    component.getParentProperties(textareaProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(textareaProperties());
    component.getPropertiesMapping(textareaPropertiesMapping());

    component.loadStates([
      'const [textValue, setTextValue] = useState("");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};
