import {
  rangeSliderPropertiesMapping,
  rangeSliderProperties,
  rangeSliderVariants,
  rangeSliderChildProperties, rangeSliderChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { RangeSlider } from "@igrp/igrp-framework-react-design-system";',
      'import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(rangeSliderVariants());
    component.loadGroup('formElements')
    component.loadLabel('Slider')
    component.getProperties(rangeSliderProperties());
    component.getPropertiesMapping(rangeSliderPropertiesMapping());
    component.getChildProperties(rangeSliderChildProperties()); // TODO: handle a way to fetch parent properties
    component.getChildPropertiesMapping(rangeSliderChildPropertiesMapping()); // TODO: handle a way to fetch parent properties

    component.loadStates([
      {
        state: {
          id: '',
          name: '{{id}}Value',
          type: 'array',
          defaultValue: '[0, 100]'
        },
        required: true
      }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const SLIDER = 'slider'

export { SLIDER };
