import {
  inputColorPropertiesMapping,
  inputColorProperties,
  inputColorVariants,
  inputColorChildProperties,
  inputColorChildPropertiesMapping,
  inputColorInteractions,
  inputColorInteractionsMapping,
  inputColorData,
  inputColorRules, inputColorStyle,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInputColor } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadComponentClass('IGRPInputColor')
    component.loadVariants(inputColorVariants());
    component.loadGroup('formElements')
    component.loadLabel('Color')
    component.getProperties(inputColorProperties());
    component.getPropertiesMapping(inputColorPropertiesMapping());
    component.getChildProperties(inputColorChildProperties());
    component.getChildPropertiesMapping(inputColorChildPropertiesMapping());
    component.getInteractions(inputColorInteractions())
    component.getInteractionsMapping(inputColorInteractionsMapping());
    component.getData(inputColorData());
    component.getRules(inputColorRules())
    component.getStyle(inputColorStyle())

    component.loadStates([
      {
        state: {
          id: '',
          name: 'inputColor{{id}}Value',
          type: 'string',
          defaultValue: '{{value}}'
        },
        required: false
      }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_COLOR = 'inputColor'

export { INPUT_COLOR };
