import {
  inputAddOnPropertiesMapping,
  inputAddOnProperties,
  inputAddOnVariants,
  inputAddOnChildProperties,
  inputAddOnChildPropertiesMapping,
  inputAddOnInteractions,
  inputAddOnInteractionsMapping,
  inputAddOnData,
  inputAddOnStyle, inputAddOnRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPInputAddOn')
    component.loadVariants(inputAddOnVariants());
    component.loadGroup('formElements')
    component.loadLabel('Add On')
    component.getProperties(inputAddOnProperties());
    component.getPropertiesMapping(inputAddOnPropertiesMapping());
    component.getChildProperties(inputAddOnChildProperties());
    component.getChildPropertiesMapping(inputAddOnChildPropertiesMapping());
    component.getInteractions(inputAddOnInteractions());
    component.getInteractionsMapping(inputAddOnInteractionsMapping());
    component.getData(inputAddOnData());
    component.getStyle(inputAddOnStyle())
    component.getRules(inputAddOnRules())

    component.loadStates([
      {
        state: {
          id: '',
          name: 'inputAddOn{{id}}Value',
          type: 'string',
          defaultValue: '{{value}}'
        },
        required: false
      }
    ]);

    component.setRenderer(liquidRenderer);
  },
};

const INPUT_ADD_ON = 'inputAddOn'

export { INPUT_ADD_ON };