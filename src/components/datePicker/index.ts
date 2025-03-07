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
      'import { DatePicker } from "@igrp/igrp-framework-react-design-system";',
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
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
      'const [selectedDate, setSelectedDate] = useState(null);'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const DATE_PICKER = 'datePicker'

export { DATE_PICKER };
