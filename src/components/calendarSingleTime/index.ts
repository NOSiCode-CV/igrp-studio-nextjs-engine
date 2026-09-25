import {
  calendarSingleTimePropertiesMapping,
  calendarSingleTimeProperties,
  calendarSingleTimeVariants,
  calendarSingleTimeChildProperties,
  calendarSingleTimeChildPropertiesMapping,
  calendarSingleTimeInteractions,
  calendarSingleTimeInteractionsMapping,
  calendarSingleTimeData, calendarSingleTimeStyle, calendarSingleTimeRules,
} from './properties';
import { Component, liquidRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([]);

    component.loadComponentClass('IGRPCalendarSingleTime')
    component.loadVariants(calendarSingleTimeVariants());
    component.loadGroup('formElements')
    component.loadLabel('Calendar SingleTime')
    component.getProperties(calendarSingleTimeProperties());
    component.getPropertiesMapping(calendarSingleTimePropertiesMapping());
    component.getInteractions(calendarSingleTimeInteractions());
    component.getInteractionsMapping(calendarSingleTimeInteractionsMapping());
    component.getData(calendarSingleTimeData());
    component.getChildProperties(calendarSingleTimeChildProperties());
    component.getChildPropertiesMapping(calendarSingleTimeChildPropertiesMapping());
    component.getStyle(calendarSingleTimeStyle())
    component.getRules(calendarSingleTimeRules())
    component.loadStates([]);

    component.setRenderer(liquidRenderer);
  },
};

const CALENDAR_SINGLE_TIME = 'calendarSingleTime'

export { CALENDAR_SINGLE_TIME };
