import {
  switchPropertiesMapping,
  switchProperties,
  switchVariants,
  switchChildProperties,
  switchChildPropertiesMapping, switchInteractions, switchInteractionsMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPSwitch } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(switchVariants());
    component.loadGroup('formElements')
    component.loadLabel('Switch')
    component.getProperties(switchProperties());
    component.getPropertiesMapping(switchPropertiesMapping());
    component.getChildProperties(switchChildProperties());
    component.getChildPropertiesMapping(switchChildPropertiesMapping());
    component.getInteractions(switchInteractions())
    component.getInteractionsMapping(switchInteractionsMapping())

    component.loadStates([
      {
        state: {
          id: '',
          name: 'is{{id}}Checked',
          type: 'boolean',
          defaultValue: 'false'
        },
        required: true
      }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const SWITCH = 'switch'

export { SWITCH };
