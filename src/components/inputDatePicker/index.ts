import {
  inputDatePickerPropertiesMapping,
  inputDatePickerProperties,
  inputDatePickerVariants,
  inputDatePickerChildProperties,
  inputDatePickerChildPropertiesMapping, inputDatePickerInteractions, inputDatePickerInteractionsMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDatePicker } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(inputDatePickerVariants());
    component.loadGroup('formElements')
    component.loadLabel('Date Picker')
    component.getProperties(inputDatePickerProperties());
    component.getPropertiesMapping(inputDatePickerPropertiesMapping());
    component.getChildProperties(inputDatePickerChildProperties());
    component.getChildPropertiesMapping(inputDatePickerChildPropertiesMapping());
    component.getInteractions(inputDatePickerInteractions())
    component.getInteractionsMapping(inputDatePickerInteractionsMapping())
    
    component.loadStates([
      'const [inputDatePicker{{id}}Value, setInputDatePicker{{id}}Value] = useState("{{value}}");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_DATE_PICKER = 'inputDatePicker'

export { INPUT_DATE_PICKER };