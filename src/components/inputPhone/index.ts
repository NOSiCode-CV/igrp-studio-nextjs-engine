import {
  inputPhonePropertiesMapping,
  inputPhoneProperties,
  inputPhoneVariants,
  inputPhoneChildProperties,
  inputPhoneChildPropertiesMapping, inputPhoneInteractions, inputPhoneInteractionsMapping, inputPhoneData,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInputPhone } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(inputPhoneVariants());
    component.loadGroup('formElements')
    component.loadLabel('Phone')
    component.getProperties(inputPhoneProperties());
    component.getPropertiesMapping(inputPhonePropertiesMapping());
    component.getChildProperties(inputPhoneChildProperties());
    component.getChildPropertiesMapping(inputPhoneChildPropertiesMapping());
    component.getInteractions(inputPhoneInteractions())
    component.getInteractionsMapping(inputPhoneInteractionsMapping())
    component.getData(inputPhoneData());

    component.loadStates([
      {
        state: {
          id: '',
          name: 'inputPhone{{id}}Value',
          type: 'string',
          defaultValue: '{{value}}'
        },
        required: false
      }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_PHONE = 'inputPhone'

export { INPUT_PHONE };
