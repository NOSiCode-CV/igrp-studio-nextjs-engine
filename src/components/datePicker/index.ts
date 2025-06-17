import {
  datePickerPropertiesMapping,
  datePickerProperties,
  datePickerVariants,
  datePickerChildProperties,
  datePickerChildPropertiesMapping,
  datePickerInteractions,
  datePickerInteractionsMapping,
  datePickerData, datePickerRules, datePickerStyle,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPInputDate')
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
    component.getRules(datePickerRules())
    component.getStyle(datePickerStyle())
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
