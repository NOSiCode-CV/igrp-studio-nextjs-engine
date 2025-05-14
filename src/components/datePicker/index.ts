import {
  datePickerPropertiesMapping,
  datePickerProperties,
  datePickerVariants,
  datePickerChildProperties,
  datePickerChildPropertiesMapping,
  datePickerInteractions,
  datePickerInteractionsMapping,
  datePickerData,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInputDate } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(datePickerVariants());
    component.loadGroup('formElements')
    component.loadLabel('Input Date')
    component.getProperties(datePickerProperties());
    component.getPropertiesMapping(datePickerPropertiesMapping());
    component.getInteractions(datePickerInteractions());
    component.getInteractionsMapping(datePickerInteractionsMapping());
    component.getData(datePickerData());
    component.getChildProperties(datePickerChildProperties());
    component.getChildPropertiesMapping(datePickerChildPropertiesMapping());

    component.loadStates([
      {
        state: {
          id: '',
          name: 'input{{id}}Value',
          type: 'Date | undefined',
          defaultValue: 'undefined'
        },
        required: true
      }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const DATE_PICKER = 'datePicker'

export { DATE_PICKER };
