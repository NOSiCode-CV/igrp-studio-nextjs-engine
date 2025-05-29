import {
  inputHiddenPropertiesMapping,
  inputHiddenProperties,
  inputHiddenVariants,
  inputHiddenChildProperties,
  inputHiddenChildPropertiesMapping, inputHiddenRules, inputHiddenStyle,
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
    component.getRules(inputHiddenRules())
    component.getStyle(inputHiddenStyle())
    component.loadStates([
      {
        state: {
          id: '',
          name: 'inputHidden{{id}}Value',
          type: 'string',
          defaultValue: '{{value}}'
        },
        required: false
      }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_HIDDEN = 'inputHidden'

export { INPUT_HIDDEN };
