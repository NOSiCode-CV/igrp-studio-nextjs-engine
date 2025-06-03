import {
  inputTextareaPropertiesMapping,
  inputTextareaProperties,
  inputTextareaVariants,
  inputTextareaChildProperties,
  inputTextareaChildPropertiesMapping,
  inputTextareaInteractions,
  inputTextareaInteractionsMapping,
  inputTextareaData,
  inputTextareaStyle, inputTextareaRules,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPTextarea } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadComponentClass('IGRPTextarea')
    component.loadVariants(inputTextareaVariants());
    component.loadGroup('formElements')
    component.loadLabel('Textarea')
    component.getProperties(inputTextareaProperties());
    component.getPropertiesMapping(inputTextareaPropertiesMapping());
    component.getChildProperties(inputTextareaChildProperties());
    component.getChildPropertiesMapping(inputTextareaChildPropertiesMapping());
    component.getInteractions(inputTextareaInteractions());
    component.getInteractionsMapping(inputTextareaInteractionsMapping());
    component.getData(inputTextareaData());
    component.getStyle(inputTextareaStyle());
    component.getRules(inputTextareaRules());

    component.loadStates([
      {
        state: {
          id: '',
          name: 'inputTextarea{{id}}Value',
          type: 'string',
          defaultValue: '{{value}}'
        },
        required: false
      }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_TEXTAREA = 'inputTextarea'

export { INPUT_TEXTAREA };
