import {
  inputTextareaPropertiesMapping,
  inputTextareaProperties,
  inputTextareaVariants,
  inputTextareaChildProperties,
  inputTextareaChildPropertiesMapping, inputTextareaInteractions, inputTextareaInteractionsMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPTextarea } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(inputTextareaVariants());
    component.loadGroup('formElements')
    component.loadLabel('Textarea')
    component.getProperties(inputTextareaProperties());
    component.getPropertiesMapping(inputTextareaPropertiesMapping());
    component.getChildProperties(inputTextareaChildProperties());
    component.getChildPropertiesMapping(inputTextareaChildPropertiesMapping());
    component.getInteractions(inputTextareaInteractions());
    component.getInteractionsMapping(inputTextareaInteractionsMapping());

    component.loadStates([
      'const [inputTextarea{{id}}Value, setInputTextarea{{id}}Value] = useState("{{value}}");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_TEXTAREA = 'inputTextarea'

export { INPUT_TEXTAREA };