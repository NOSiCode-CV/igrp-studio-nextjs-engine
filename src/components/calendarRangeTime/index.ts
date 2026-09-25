import {
  calendarRangeTimePropertiesMapping,
  calendarRangeTimeProperties,
  calendarRangeTimeVariants,
  calendarRangeTimeChildProperties,
  calendarRangeTimeChildPropertiesMapping,
  calendarRangeTimeInteractions,
  calendarRangeTimeInteractionsMapping,
  calendarRangeTimeData, calendarRangeTimeStyle, calendarRangeTimeRules,
} from './properties';
import { Component, liquidRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
      'import { DateRange } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadComponentClass('IGRPCalendarRangeTime')
    component.loadVariants(calendarRangeTimeVariants());
    component.loadGroup('formElements')
    component.loadLabel('Calendar RangeTime')
    component.getProperties(calendarRangeTimeProperties());
    component.getPropertiesMapping(calendarRangeTimePropertiesMapping());
    component.getInteractions(calendarRangeTimeInteractions());
    component.getInteractionsMapping(calendarRangeTimeInteractionsMapping());
    component.getData(calendarRangeTimeData());
    component.getChildProperties(calendarRangeTimeChildProperties());
    component.getChildPropertiesMapping(calendarRangeTimeChildPropertiesMapping());
    component.getStyle(calendarRangeTimeStyle())
    component.getRules(calendarRangeTimeRules())
    component.loadStates([]);

    component.setRenderer(liquidRenderer);
  },
};

const CALENDAR_RANGE_TIME = 'calendarRangeTime'

export { CALENDAR_RANGE_TIME };
