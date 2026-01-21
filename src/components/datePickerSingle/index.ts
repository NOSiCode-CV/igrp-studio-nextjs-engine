import {
  datePickerSinglePropertiesMapping,
  datePickerSingleProperties,
  datePickerSingleVariants,
  datePickerSingleChildProperties,
  datePickerSingleChildPropertiesMapping,
  datePickerSingleInteractions,
  datePickerSingleInteractionsMapping,
  datePickerSingleData, datePickerSingleStyle, datePickerSingleRules,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPDatePickerSingle')
    component.loadVariants(datePickerSingleVariants());
    component.loadGroup('formElements')
    component.loadLabel('Date Picker Single')
    component.getProperties(datePickerSingleProperties());
    component.getPropertiesMapping(datePickerSinglePropertiesMapping());
    component.getChildProperties(datePickerSingleChildProperties());
    component.getChildPropertiesMapping(datePickerSingleChildPropertiesMapping());
    component.getInteractions(datePickerSingleInteractions())
    component.getInteractionsMapping(datePickerSingleInteractionsMapping())
    component.getData(datePickerSingleData());
    component.getStyle(datePickerSingleStyle())
    component.getRules(datePickerSingleRules())

    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: DATE_PICKER_SINGLE }))

    component.loadStates([
      {
        state: {
          id: '',
          name: 'datePickerSingle{{id}}Value',
          type: 'string',
          defaultValue: '{{value}}'
        },
        required: false
      }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const DATE_PICKER_SINGLE = 'datePickerSingle'

export { DATE_PICKER_SINGLE };
