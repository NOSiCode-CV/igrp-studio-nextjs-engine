import {
  inputDatePickerSinglePropertiesMapping,
  inputDatePickerSingleProperties,
  inputDatePickerSingleVariants,
  inputDatePickerSingleChildProperties,
  inputDatePickerSingleChildPropertiesMapping,
  inputDatePickerSingleInteractions,
  inputDatePickerSingleInteractionsMapping,
  inputDatePickerSingleData, inputDatePickerSingleStyle, inputDatePickerSingleRules,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([]);

    component.loadComponentClass('IGRPDatePickerInputSingle')
    component.loadVariants(inputDatePickerSingleVariants());
    component.loadGroup('formElements')
    component.loadLabel('Date Picker Input Single')
    component.getProperties(inputDatePickerSingleProperties());
    component.getPropertiesMapping(inputDatePickerSinglePropertiesMapping());
    component.getInteractions(inputDatePickerSingleInteractions());
    component.getInteractionsMapping(inputDatePickerSingleInteractionsMapping());
    component.getData(inputDatePickerSingleData());
    component.getChildProperties(inputDatePickerSingleChildProperties());
    component.getChildPropertiesMapping(inputDatePickerSingleChildPropertiesMapping());
    component.getStyle(inputDatePickerSingleStyle())
    component.getRules(inputDatePickerSingleRules())
    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_DATE_PICKER_SINGLE = 'inputDatePickerSingle'

export { INPUT_DATE_PICKER_SINGLE };
