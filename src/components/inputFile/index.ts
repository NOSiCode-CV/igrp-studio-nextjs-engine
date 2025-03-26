import {
  inputFilePropertiesMapping,
  inputFileProperties,
  inputFileVariants,
  inputFileChildProperties,
  inputFileChildPropertiesMapping, inputFileInteractions, inputFileInteractionsMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInputFile } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(inputFileVariants());
    component.loadGroup('formElements')
    component.loadLabel('Upload File')
    component.getProperties(inputFileProperties());
    component.getPropertiesMapping(inputFilePropertiesMapping());
    component.getChildProperties(inputFileChildProperties());
    component.getChildPropertiesMapping(inputFileChildPropertiesMapping());
    component.getInteractions(inputFileInteractions())
    component.getInteractionsMapping(inputFileInteractionsMapping())

    component.loadStates([
      'const [inputFile{{id}}Value, setInputFile{{id}}Value] = useState("{{value}}");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_FILE = 'inputFile'

export { INPUT_FILE };