import {
  datePickerPropertiesMapping,
  datePickerProperties,
  datePickerVariants,
  datePickerChildProperties, datePickerChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInputDate } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(datePickerVariants());
    component.loadIcon('Calendar')
    component.loadGroup('formElements')
    component.loadLabel('Date Picker')
    component.getProperties(datePickerProperties());
    component.getPropertiesMapping(datePickerPropertiesMapping());
    component.getChildProperties(datePickerChildProperties());
    component.getChildPropertiesMapping(datePickerChildPropertiesMapping());

    component.loadStates([
      'const [input{{id}}Value, setInput{{id}}Value] = useState<Date | undefined>(undefined);'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const DATE_PICKER = 'datePicker'

export { DATE_PICKER };
