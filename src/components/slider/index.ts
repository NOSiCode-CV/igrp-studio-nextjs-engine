import { rangeSliderPropertiesMapping, rangeSliderProperties, rangeSliderVariants } from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { RangeSlider } from "@igrp/igrp-framework-react-design-system";',
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(rangeSliderVariants());
    component.getParentProperties(rangeSliderProperties()); // TODO: handle a way to fetch parent properties
    component.getProperties(rangeSliderProperties());
    component.getPropertiesMapping(rangeSliderPropertiesMapping());

    component.loadStates([
      'const [value, setValue] = useState([0, 100]);' // example range for the slider
    ]);

    component.setRenderer(hbsRenderer({
      componentName: 'slider',
      properties: component.properties,
      id: ''
    }));
  },
};
