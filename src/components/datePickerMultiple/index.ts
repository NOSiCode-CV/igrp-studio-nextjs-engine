import {
  datePickerMultiplePropertiesMapping,
  datePickerMultipleProperties,
  datePickerMultipleVariants,
  datePickerMultipleChildProperties,
  datePickerMultipleChildPropertiesMapping,
  datePickerMultipleInteractions,
  datePickerMultipleInteractionsMapping,
  datePickerMultipleData, datePickerMultipleStyle, datePickerMultipleRules,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([]);

    component.loadComponentClass('IGRPDatePickerMultiple')
    component.loadVariants(datePickerMultipleVariants());
    component.loadGroup('formElements')
    component.loadLabel('Date Multiple')
    component.getProperties(datePickerMultipleProperties());
    component.getPropertiesMapping(datePickerMultiplePropertiesMapping());
    component.getInteractions(datePickerMultipleInteractions());
    component.getInteractionsMapping(datePickerMultipleInteractionsMapping());
    component.getData(datePickerMultipleData());
    component.getChildProperties(datePickerMultipleChildProperties());
    component.getChildPropertiesMapping(datePickerMultipleChildPropertiesMapping());
    component.getStyle(datePickerMultipleStyle())
    component.getRules(datePickerMultipleRules())

    component.setRenderer(hbsRenderer);
  },
};

const DATE_PICKER_MULTIPLE = 'datePickerMultiple'

export { DATE_PICKER_MULTIPLE };
