import {
  calendarMultiplePropertiesMapping,
  calendarMultipleProperties,
  calendarMultipleVariants,
  calendarMultipleChildProperties,
  calendarMultipleChildPropertiesMapping,
  calendarMultipleInteractions,
  calendarMultipleInteractionsMapping,
  calendarMultipleData, calendarMultipleStyle, calendarMultipleRules,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([]);

    component.loadComponentClass('IGRPCalendarMultiple')
    component.loadVariants(calendarMultipleVariants());
    component.loadGroup('formElements')
    component.loadLabel('Calendar Multiple')
    component.getProperties(calendarMultipleProperties());
    component.getPropertiesMapping(calendarMultiplePropertiesMapping());
    component.getInteractions(calendarMultipleInteractions());
    component.getInteractionsMapping(calendarMultipleInteractionsMapping());
    component.getData(calendarMultipleData());
    component.getChildProperties(calendarMultipleChildProperties());
    component.getChildPropertiesMapping(calendarMultipleChildPropertiesMapping());
    component.getStyle(calendarMultipleStyle())
    component.getRules(calendarMultipleRules())
    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const CALENDAR_MULTIPLE = 'calendarMultiple'

export { CALENDAR_MULTIPLE };
