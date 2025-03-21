import {
  inputTextPropertiesMapping,
  inputTextProperties,
  inputTextVariants,
  inputTextChildProperties,
  inputTextChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { TABLE_TEXT_CELL } from '../table/children/tableTextCell';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInputText } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(inputTextVariants());
    component.loadGroup('formElements')
    component.loadLabel('Input Text')
    component.getProperties(inputTextProperties());
    component.getPropertiesMapping(inputTextPropertiesMapping());
    component.getChildProperties(inputTextChildProperties());
    component.getChildPropertiesMapping(inputTextChildPropertiesMapping());

    component.loadStates([
      'const [inputText{{id}}Value, setInputText{{id}}Value] = useState("{{value}}");'
    ]);

    component.loadOnTableComponent(TABLE_TEXT_CELL)

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_TEXT = 'inputText'

export { INPUT_TEXT };