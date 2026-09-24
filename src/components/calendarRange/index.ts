import {
  calendarRangePropertiesMapping,
  calendarRangeProperties,
  calendarRangeVariants,
  calendarRangeChildProperties,
  calendarRangeChildPropertiesMapping,
  calendarRangeInteractions,
  calendarRangeInteractionsMapping,
  calendarRangeData, calendarRangeStyle, calendarRangeRules,
} from './properties';
import { Component, liquidRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
      'import { DateRange } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadComponentClass('IGRPCalendarRange')
    component.loadVariants(calendarRangeVariants());
    component.loadGroup('formElements')
    component.loadLabel('Calendar Range')
    component.getProperties(calendarRangeProperties());
    component.getPropertiesMapping(calendarRangePropertiesMapping());
    component.getInteractions(calendarRangeInteractions());
    component.getInteractionsMapping(calendarRangeInteractionsMapping());
    component.getData(calendarRangeData());
    component.getChildProperties(calendarRangeChildProperties());
    component.getChildPropertiesMapping(calendarRangeChildPropertiesMapping());
    component.getStyle(calendarRangeStyle())
    component.getRules(calendarRangeRules())
    component.loadStates([
      {
        state: {
          id: '',
          name: 'calendarRange{{id}}Value',
          type: 'DateRange | undefined',
          defaultValue: '{ from: undefined, to: undefined }'
        },
        required: true
      }
    ]);

    component.setRenderer(liquidRenderer);
  },
};

const CALENDAR_RANGE = 'calendarRange'

export { CALENDAR_RANGE };
