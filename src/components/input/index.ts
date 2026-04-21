import {
  inputPropertiesMapping,
  inputProperties,
  inputVariants,
  inputChildProperties,
  inputChildPropertiesMapping, inputInteractions, inputInteractionsMapping, inputData, inputStyle, inputRules,
} from './properties';
import { Component, liquidRenderer } from '../index';
import { TABLE_TEXT_CELL } from '../table/children/tableTextCell';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPInputBasic')
    component.loadVariants(inputVariants());
    component.loadGroup('formElements')
    component.loadLabel('Input')
    component.getProperties(inputProperties());
    component.getPropertiesMapping(inputPropertiesMapping());
    component.getInteractions(inputInteractions());
    component.getInteractionsMapping(inputInteractionsMapping());
    component.getData(inputData());
    component.getChildProperties(inputChildProperties());
    component.getChildPropertiesMapping(inputChildPropertiesMapping());
    component.getStyle(inputStyle())
    component.getRules(inputRules())
    component.loadStates([
      {
        state: {
          id: '',
          name: 'input{{id}}Value',
          type: 'string',
          defaultValue: '{{value}}'
        },
        required: false
      }
    ]);

    component.loadOnTableComponent(TABLE_TEXT_CELL)

    component.setRenderer(liquidRenderer);
  },
};

const INPUT = 'input'

export { INPUT };
