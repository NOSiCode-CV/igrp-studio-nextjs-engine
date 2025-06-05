import {
  inputPhonePropertiesMapping,
  inputPhoneProperties,
  inputPhoneVariants,
  inputPhoneChildProperties,
  inputPhoneChildPropertiesMapping,
  inputPhoneInteractions,
  inputPhoneInteractionsMapping,
  inputPhoneData,
  inputPhoneRules, inputPhoneStyle,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInputPhone } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadComponentClass('IGRPInputPhone')
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
    component.getRules(inputPhoneRules());
    component.getStyle(inputPhoneStyle());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: INPUT_PHONE }))

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
