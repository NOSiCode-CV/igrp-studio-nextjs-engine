import {
  inputTimePropertiesMapping,
  inputTimeProperties,
  inputTimeVariants,
  inputTimeChildProperties,
  inputTimeChildPropertiesMapping,
  inputTimeInteractions,
  inputTimeInteractionsMapping,
  inputTimeData,
  inputTimeRules,
  inputTimeStyle,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInputTime } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(inputTimeVariants());
    component.loadGroup('formElements')
    component.loadLabel('Time')
    component.getProperties(inputTimeProperties());
    component.getPropertiesMapping(inputTimePropertiesMapping());
    component.getChildProperties(inputTimeChildProperties());
    component.getChildPropertiesMapping(inputTimeChildPropertiesMapping());
    component.getInteractions(inputTimeInteractions());
    component.getInteractionsMapping(inputTimeInteractionsMapping());
    component.getData(inputTimeData());
    component.getRules(inputTimeRules());
    component.getStyle(inputTimeStyle());

    component.loadStates([
      {
        state: {
          id: '',
          name: 'inputTime{{id}}Value',
          type: 'string',
          defaultValue: '{{value}}'
        },
        required: false
      }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_TIME = 'inputTime'

export { INPUT_TIME };
