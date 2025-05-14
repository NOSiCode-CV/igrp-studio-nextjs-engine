import {
  inputNumberPropertiesMapping,
  inputNumberProperties,
  inputNumberVariants,
  inputNumberChildProperties,
  inputNumberChildPropertiesMapping, inputNumberInteractions, inputNumberInteractionsMapping, inputNumberData,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInputNumber } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(inputNumberVariants());
    component.loadGroup('formElements')
    component.loadLabel('Number')
    component.getProperties(inputNumberProperties());
    component.getPropertiesMapping(inputNumberPropertiesMapping());
    component.getChildProperties(inputNumberChildProperties());
    component.getChildPropertiesMapping(inputNumberChildPropertiesMapping());
    component.getInteractions(inputNumberInteractions())
    component.getInteractionsMapping(inputNumberInteractionsMapping())
    component.getData(inputNumberData());

    component.loadStates([
      {
        state: {
          id: '',
          name: 'inputNumber{{id}}Value',
          type: 'number',
          defaultValue: '0'
        },
        required: false
      }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_NUMBER = 'inputNumber'

export { INPUT_NUMBER };
