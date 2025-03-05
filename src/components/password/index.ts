import { passwordPropertiesMapping, passwordProperties, passwordVariants } from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { Input } from "@igrp/igrp-framework-react-design-system";',
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(passwordVariants());
    component.getParentProperties(passwordProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(passwordProperties());
    component.getPropertiesMapping(passwordPropertiesMapping());

    component.loadStates([
      'const [password, setPassword] = useState("");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};