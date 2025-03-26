import {
  inputNumberPropertiesMapping,
  inputNumberProperties,
  inputNumberVariants,
  inputNumberChildProperties,
  inputNumberChildPropertiesMapping, inputNumberInteractions, inputNumberInteractionsMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInputNumber } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(inputNumberVariants());
    component.loadGroup('formElements')
    component.loadLabel('Input Number')
    component.getProperties(inputNumberProperties());
    component.getPropertiesMapping(inputNumberPropertiesMapping());
    component.getChildProperties(inputNumberChildProperties());
    component.getChildPropertiesMapping(inputNumberChildPropertiesMapping());
    component.getInteractions(inputNumberInteractions())
    component.getInteractionsMapping(inputNumberInteractionsMapping())

    component.loadStates([
      'const [inputNumber{{id}}Value, setInputNumber{{id}}Value] = useState("{{value}}");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_NUMBER = 'inputNumber'

export { INPUT_NUMBER };