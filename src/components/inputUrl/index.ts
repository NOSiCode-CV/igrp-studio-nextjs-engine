import {
  inputUrlPropertiesMapping,
  inputUrlProperties,
  inputUrlVariants,
  inputUrlChildProperties,
  inputUrlChildPropertiesMapping,
  inputUrlInteractions,
  inputUrlInteractionsMapping,
  inputUrlData,
  inputUrlRules,
  inputUrlStyle,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInputUrl } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(inputUrlVariants());
    component.loadGroup('formElements')
    component.loadLabel('URL')
    component.getProperties(inputUrlProperties());
    component.getPropertiesMapping(inputUrlPropertiesMapping());
    component.getChildProperties(inputUrlChildProperties());
    component.getChildPropertiesMapping(inputUrlChildPropertiesMapping());
    component.getInteractions(inputUrlInteractions());
    component.getInteractionsMapping(inputUrlInteractionsMapping());
    component.getData(inputUrlData());
    component.getRules(inputUrlRules());
    component.getStyle(inputUrlStyle());

    component.loadStates([
      {
        state: {
          id: '',
          name: 'inputUrl{{id}}Value',
          type: 'string',
          defaultValue: '{{value}}'
        },
        required: false
      }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_URL = 'inputUrl'

export { INPUT_URL };
