import {
  inputUrlPropertiesMapping,
  inputUrlProperties,
  inputUrlVariants,
  inputUrlChildProperties,
  inputUrlChildPropertiesMapping, inputUrlInteractions, inputUrlInteractionsMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInputUrl } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(inputUrlVariants());
    component.loadGroup('formElements')
    component.loadLabel('Input URL')
    component.getProperties(inputUrlProperties());
    component.getPropertiesMapping(inputUrlPropertiesMapping());
    component.getChildProperties(inputUrlChildProperties());
    component.getChildPropertiesMapping(inputUrlChildPropertiesMapping());
    component.getInteractions(inputUrlInteractions());
    component.getInteractionsMapping(inputUrlInteractionsMapping());

    component.loadStates([
      'const [inputUrl{{id}}Value, setInputUrl{{id}}Value] = useState("{{value}}");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_URL = 'inputUrl'

export { INPUT_URL };