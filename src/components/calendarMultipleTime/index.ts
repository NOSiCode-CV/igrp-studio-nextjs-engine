import {
  calendarMultipleTimePropertiesMapping,
  calendarMultipleTimeProperties,
  calendarMultipleTimeVariants,
  calendarMultipleTimeChildProperties,
  calendarMultipleTimeChildPropertiesMapping,
  calendarMultipleTimeInteractions,
  calendarMultipleTimeInteractionsMapping,
  calendarMultipleTimeData, calendarMultipleTimeStyle, calendarMultipleTimeRules,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([]);

    component.loadComponentClass('IGRPCalendarMultipleTime')
    component.loadVariants(calendarMultipleTimeVariants());
    component.loadGroup('formElements')
    component.loadLabel('Calendar MultipleTime')
    component.getProperties(calendarMultipleTimeProperties());
    component.getPropertiesMapping(calendarMultipleTimePropertiesMapping());
    component.getInteractions(calendarMultipleTimeInteractions());
    component.getInteractionsMapping(calendarMultipleTimeInteractionsMapping());
    component.getData(calendarMultipleTimeData());
    component.getChildProperties(calendarMultipleTimeChildProperties());
    component.getChildPropertiesMapping(calendarMultipleTimeChildPropertiesMapping());
    component.getStyle(calendarMultipleTimeStyle())
    component.getRules(calendarMultipleTimeRules())
    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const CALENDAR_MULTIPLE_TIME = 'calendarMultipleTime'

export { CALENDAR_MULTIPLE_TIME };
