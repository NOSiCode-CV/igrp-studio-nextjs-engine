import {
  calendarSinglePropertiesMapping,
  calendarSingleProperties,
  calendarSingleVariants,
  calendarSingleChildProperties,
  calendarSingleChildPropertiesMapping,
  calendarSingleInteractions,
  calendarSingleInteractionsMapping,
  calendarSingleData, calendarSingleStyle, calendarSingleRules,
} from './properties';
import { Component, liquidRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([]);

    component.loadComponentClass('IGRPCalendarSingle')
    component.loadVariants(calendarSingleVariants());
    component.loadGroup('formElements')
    component.loadLabel('Calendar Single')
    component.getProperties(calendarSingleProperties());
    component.getPropertiesMapping(calendarSinglePropertiesMapping());
    component.getInteractions(calendarSingleInteractions());
    component.getInteractionsMapping(calendarSingleInteractionsMapping());
    component.getData(calendarSingleData());
    component.getChildProperties(calendarSingleChildProperties());
    component.getChildPropertiesMapping(calendarSingleChildPropertiesMapping());
    component.getStyle(calendarSingleStyle())
    component.getRules(calendarSingleRules())
    component.loadStates([]);

    component.setRenderer(liquidRenderer);
  },
};

const CALENDAR_SINGLE = 'calendarSingle'

export { CALENDAR_SINGLE };
