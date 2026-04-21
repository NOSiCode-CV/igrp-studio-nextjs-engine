import {
  inputTextPropertiesMapping,
  inputTextProperties,
  inputTextVariants,
  inputTextChildProperties,
  inputTextChildPropertiesMapping, inputTextData, inputTextInteractions, inputTextRules, inputTextStyle,
} from './properties';
import { Component, liquidRenderer } from '../index';
import { TABLE_TEXT_CELL } from '../table/children/tableTextCell';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPInputText')
    component.loadVariants(inputTextVariants());
    component.loadGroup('formElements')
    component.loadLabel('Input Text')
    component.getProperties(inputTextProperties());
    component.getPropertiesMapping(inputTextPropertiesMapping());
    component.getChildProperties(inputTextChildProperties());
    component.getChildPropertiesMapping(inputTextChildPropertiesMapping());
    component.getInteractions(inputTextInteractions());
    component.getData(inputTextData());
    component.getRules(inputTextRules())
    component.getStyle(inputTextStyle())

    component.loadStates([
      {
        state: {
          id: '',
          name: 'inputText{{id}}Value',
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

const INPUT_TEXT = 'inputText'

export { INPUT_TEXT };
