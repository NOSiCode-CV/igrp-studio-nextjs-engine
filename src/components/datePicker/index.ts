import { datePickerPropertiesMapping, datePickerProperties, datePickerVariants } from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { DatePicker } from "@igrp/igrp-framework-react-design-system";',
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(datePickerVariants());
    component.getParentProperties(datePickerProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(datePickerProperties());
    component.getPropertiesMapping(datePickerPropertiesMapping());

    component.loadStates([
      'const [selectedDate, setSelectedDate] = useState(null);'
    ]);

    component.setRenderer(hbsRenderer({
      componentName: 'datePicker',
      properties: component.properties,
      id: ''
    }));
  },
};
