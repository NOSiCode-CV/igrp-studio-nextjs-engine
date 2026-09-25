import {
  dateTimeInputProperties,
  dateTimeInputPropertiesMapping,
  dateTimeInputVariants,
  dateTimeInputChildProperties,
  dateTimeInputChildPropertiesMapping,
  dateTimeInputStyle,
  dateTimeInputRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPDateTimeInput');
    component.loadVariants(dateTimeInputVariants());
    component.loadGroup('forms');
    component.loadLabel('Date Time Input');
    component.getProperties(dateTimeInputProperties());
    component.getPropertiesMapping(dateTimeInputPropertiesMapping());
    component.getChildProperties(dateTimeInputChildProperties());
    component.getChildPropertiesMapping(dateTimeInputChildPropertiesMapping());
    component.getStyle(dateTimeInputStyle());
    component.getRules(dateTimeInputRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const DATE_TIME_INPUT = 'dateTimeInput';
export { DATE_TIME_INPUT };
