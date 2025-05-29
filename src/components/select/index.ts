import {
  selectPropertiesMapping,
  selectProperties,
  selectVariants,
  selectChildProperties,
  selectChildPropertiesMapping, selectInteractions, selectInteractionsMapping, selectData, selectRules, selectStyle,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPSelect } from "@igrp/igrp-framework-react-design-system";',
      'import { IGRPOptionsProps } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(selectVariants());
    component.loadGroup('formElements')
    component.loadLabel('Select')
    component.getProperties(selectProperties());
    component.getPropertiesMapping(selectPropertiesMapping());
    component.getInteractions(selectInteractions());
    component.getInteractionsMapping(selectInteractionsMapping());
    component.getChildProperties(selectChildProperties());
    component.getChildPropertiesMapping(selectChildPropertiesMapping());
    component.getData(selectData());
    component.getRules(selectRules());
    component.getStyle(selectStyle());

    component.loadStates([
      {
        state: {
          id: '',
          name: 'select{{id}}Value',
          type: 'string',
          defaultValue: '{{value}}'
        },
        required: false
      }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const SELECT = 'select'

export { SELECT };
