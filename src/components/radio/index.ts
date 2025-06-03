import {
  radioGroupPropertiesMapping,
  radioGroupProperties,
  radioGroupVariants,
  radioGroupChildProperties,
  radioGroupChildPropertiesMapping,
  radioGroupInteractions,
  radioGroupData,
  radioStyle,
  radioRules,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPRadioGroup } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadComponentClass('IGRPRadioGroup')
    component.loadVariants(radioGroupVariants());
    component.loadGroup('formElements')
    component.loadLabel('Radio')
    component.getProperties(radioGroupProperties());
    component.getPropertiesMapping(radioGroupPropertiesMapping());
    component.getChildProperties(radioGroupChildProperties());
    component.getChildPropertiesMapping(radioGroupChildPropertiesMapping());
    component.getInteractions(radioGroupInteractions());
    component.getData(radioGroupData());
    component.getStyle(radioStyle())
    component.getRules(radioRules())

    component.loadStates([
      {
        state: {
          id: '',
          name: 'radio{{id}}Value',
          type: 'string',
          defaultValue: '{{value}}'
        },
        required: true
      },
      {
        state: {
          id: '',
          name: 'radio{{id}}Options',
          type: 'IGRPOptionsProps[]',
          defaultValue: '[]'
        },
        required: true
      }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const RADIO = 'radio'

export { RADIO };
