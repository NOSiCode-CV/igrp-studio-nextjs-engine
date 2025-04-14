import {
  inputHiddenPropertiesMapping,
  inputHiddenProperties,
  inputHiddenVariants,
  inputHiddenChildProperties,
  inputHiddenChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInputHidden } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(inputHiddenVariants());
    component.loadGroup('formElements')
    component.loadLabel('Input Hidden')
    component.getProperties(inputHiddenProperties());
    component.getPropertiesMapping(inputHiddenPropertiesMapping());
    component.getChildProperties(inputHiddenChildProperties());
    component.getChildPropertiesMapping(inputHiddenChildPropertiesMapping());

    component.loadStates([
      'const [inputHidden{{id}}Value, setInputHidden{{id}}Value] = useState("{{value}}");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_HIDDEN = 'inputHidden'

export { INPUT_HIDDEN };