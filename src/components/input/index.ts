import {
  inputPropertiesMapping,
  inputProperties,
  inputVariants,
  inputChildProperties,
  inputChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInput } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(inputVariants());
    component.loadIcon('FormInput')
    component.loadGroup('formElements')
    component.loadLabel('Input')
    component.getProperties(inputProperties());
    component.getPropertiesMapping(inputPropertiesMapping());
    component.getChildProperties(inputChildProperties());
    component.getChildPropertiesMapping(inputChildPropertiesMapping());

    component.loadStates([
      'const [input{{id}}Value, setInput{{id}}Value] = useState("{{value}}");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT = 'input'

export { INPUT };