import {
  inputDatePickerPropertiesMapping,
  inputDatePickerProperties,
  inputDatePickerVariants,
  inputDatePickerChildProperties,
  inputDatePickerChildPropertiesMapping,
  inputDatePickerInteractions,
  inputDatePickerInteractionsMapping,
  inputDatePickerData, inputDatePickerStyle, inputDatePickerRules,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDatePicker } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadComponentClass('IGRPDatePicker')
    component.loadVariants(inputDatePickerVariants());
    component.loadGroup('formElements')
    component.loadLabel('Date Picker')
    component.getProperties(inputDatePickerProperties());
    component.getPropertiesMapping(inputDatePickerPropertiesMapping());
    component.getChildProperties(inputDatePickerChildProperties());
    component.getChildPropertiesMapping(inputDatePickerChildPropertiesMapping());
    component.getInteractions(inputDatePickerInteractions())
    component.getInteractionsMapping(inputDatePickerInteractionsMapping())
    component.getData(inputDatePickerData());
    component.getStyle(inputDatePickerStyle())
    component.getRules(inputDatePickerRules())

    component.loadStates([
      {
        state: {
          id: '',
          name: 'inputDatePicker{{id}}Value',
          type: 'string',
          defaultValue: '{{value}}'
        },
        required: false
      }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_DATE_PICKER = 'inputDatePicker'

export { INPUT_DATE_PICKER };
