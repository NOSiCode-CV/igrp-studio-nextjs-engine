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
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
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

    component.setRenderer(liquidRenderer);
  },
};

const INPUT_COLOR = 'inputColor'

export { INPUT_COLOR };
