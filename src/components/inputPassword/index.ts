import {
  inputPasswordPropertiesMapping,
  inputPasswordProperties,
  inputPasswordVariants,
  inputPasswordChildProperties,
  inputPasswordChildPropertiesMapping, inputPasswordInteractions, inputPasswordInteractionsMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInputPassword } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(inputPasswordVariants());
    component.loadGroup('formElements')
    component.loadLabel('Password')
    component.getProperties(inputPasswordProperties());
    component.getPropertiesMapping(inputPasswordPropertiesMapping());
    component.getInteractions(inputPasswordInteractions());
    component.getInteractionsMapping(inputPasswordInteractionsMapping());
    component.getChildProperties(inputPasswordChildProperties());
    component.getChildPropertiesMapping(inputPasswordChildPropertiesMapping());

    component.loadStates([
      'const [inputPassword{{id}}Value, setInputPassword{{id}}Value] = useState("{{value}}");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_PASSWORD = 'inputPassword'

export { INPUT_PASSWORD };