import {
  inputTimePropertiesMapping,
  inputTimeProperties,
  inputTimeVariants,
  inputTimeChildProperties,
  inputTimeChildPropertiesMapping, inputTimeInteractions, inputTimeInteractionsMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInputTime } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(inputTimeVariants());
    component.loadGroup('formElements')
    component.loadLabel('Input Textarea')
    component.getProperties(inputTimeProperties());
    component.getPropertiesMapping(inputTimePropertiesMapping());
    component.getChildProperties(inputTimeChildProperties());
    component.getChildPropertiesMapping(inputTimeChildPropertiesMapping());
    component.getInteractions(inputTimeInteractions());
    component.getInteractionsMapping(inputTimeInteractionsMapping());

    component.loadStates([
      'const [inputTime{{id}}Value, setInputTime{{id}}Value] = useState("{{value}}");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_TIME = 'inputTime'

export { INPUT_TIME };