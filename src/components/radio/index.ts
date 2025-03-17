import {
  radioGroupPropertiesMapping,
  radioGroupProperties,
  radioGroupVariants,
  radioGroupChildProperties, radioGroupChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { RadioGroup, Radio } from "@igrp/igrp-framework-react-design-system";',
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(radioGroupVariants());
    component.loadGroup('formElements')
    component.loadLabel('Radio')
    component.getProperties(radioGroupProperties());
    component.getPropertiesMapping(radioGroupPropertiesMapping());
    component.getChildProperties(radioGroupChildProperties());
    component.getChildPropertiesMapping(radioGroupChildPropertiesMapping());

    component.loadStates([
      'const [selectedRadio, setSelectedRadio] = useState("");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const RADIO = 'radio'

export { RADIO };
