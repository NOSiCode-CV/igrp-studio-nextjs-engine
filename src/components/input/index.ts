import {
  inputPropertiesMapping,
  inputProperties,
  inputVariants,
  inputChildProperties,
  inputChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { TABLE_TEXT_CELL } from '../table/children/tableTextCell';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInputBasic } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(inputVariants());
    component.loadGroup('formElements')
    component.loadLabel('Input')
    component.getProperties(inputProperties());
    component.getPropertiesMapping(inputPropertiesMapping());
    component.getChildProperties(inputChildProperties());
    component.getChildPropertiesMapping(inputChildPropertiesMapping());

    component.loadStates([
      'const [input{{id}}Value, setInput{{id}}Value] = useState("{{value}}");'
    ]);

    component.loadOnTableComponent(TABLE_TEXT_CELL)

    component.setRenderer(hbsRenderer);
  },
};

const INPUT = 'input'

export { INPUT };