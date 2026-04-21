import {
  datePickerRangePropertiesMapping,
  datePickerRangeProperties,
  datePickerRangeVariants,
  datePickerRangeChildProperties,
  datePickerRangeChildPropertiesMapping,
  datePickerRangeInteractions,
  datePickerRangeInteractionsMapping,
  datePickerRangeData, datePickerRangeStyle, datePickerRangeRules,
} from './properties';
import { Component, liquidRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
      'import { DateRange } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadComponentClass('IGRPDatePickerRange')
    component.loadVariants(datePickerRangeVariants());
    component.loadGroup('formElements')
    component.loadLabel('Date Range')
    component.getProperties(datePickerRangeProperties());
    component.getPropertiesMapping(datePickerRangePropertiesMapping());
    component.getInteractions(datePickerRangeInteractions());
    component.getInteractionsMapping(datePickerRangeInteractionsMapping());
    component.getData(datePickerRangeData());
    component.getChildProperties(datePickerRangeChildProperties());
    component.getChildPropertiesMapping(datePickerRangeChildPropertiesMapping());
    component.getStyle(datePickerRangeStyle())
    component.getRules(datePickerRangeRules())
    component.loadStates([
      {
        state: {
          id: '',
          name: 'dateRange{{id}}Value',
          type: 'DateRange | undefined',
          defaultValue: '{ from: undefined, to: undefined }'
        },
        required: true
      }
    ]);

    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: DATE_PICKER_RANGE }))

    component.setRenderer(liquidRenderer);
  },
};

const DATE_PICKER_RANGE = 'datePickerRange'

export { DATE_PICKER_RANGE };
