import {
  inputColorPropertiesMapping,
  inputColorProperties,
  inputColorVariants,
  inputColorChildProperties,
  inputColorChildPropertiesMapping, inputColorInteractions, inputColorInteractionsMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInputColor } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(inputColorVariants());
    component.loadGroup('formElements')
    component.loadLabel('Input Color')
    component.getProperties(inputColorProperties());
    component.getPropertiesMapping(inputColorPropertiesMapping());
    component.getChildProperties(inputColorChildProperties());
    component.getChildPropertiesMapping(inputColorChildPropertiesMapping());
    component.getInteractions(inputColorInteractions())
    component.getInteractionsMapping(inputColorInteractionsMapping())

    component.loadStates([
      'const [inputColor{{id}}Value, setInputColor{{id}}Value] = useState("{{value}}");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_COLOR = 'inputColor'

export { INPUT_COLOR };