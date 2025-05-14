import {
  inputDatePickerPropertiesMapping,
  inputDatePickerProperties,
  inputDatePickerVariants,
  inputDatePickerChildProperties,
  inputDatePickerChildPropertiesMapping,
  inputDatePickerInteractions,
  inputDatePickerInteractionsMapping,
  inputDatePickerData,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDatePicker } from "@igrp/igrp-framework-react-design-system";'
    ]);

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
