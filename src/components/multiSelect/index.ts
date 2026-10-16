import {
  multiSelectPropertiesMapping,
  multiSelectProperties,
  multiSelectVariants,
  multiSelectChildProperties,
  multiSelectChildPropertiesMapping,
  multiSelectInteractions,
  multiSelectInteractionsMapping,
  multiSelectData,
  multiSelectStyle,
  multiSelectRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPOptionsProps } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadStates([
      {
        state: {
          id: '',
          name: 'multiSelect{{id}}Value',
          type: 'string[]',
          defaultValue: '[]'
        },
        required: true
      },
      {
        state: {
          id: '',
          name: 'multiSelect{{id}}Options',
          type: 'IGRPOptionsProps[]',
          defaultValue: '[]'
        },
        required: true
      }
    ]);

    component.loadComponentClass('IGRPMultiSelect')
    component.loadVariants(multiSelectVariants());
    component.loadGroup('formElements')
    component.loadLabel('Multi Select')
    component.getProperties(multiSelectProperties());
    component.getPropertiesMapping(multiSelectPropertiesMapping());
    component.getInteractions(multiSelectInteractions());
    component.getInteractionsMapping(multiSelectInteractionsMapping());
    component.getData(multiSelectData());
    component.getChildProperties(multiSelectChildProperties());
    component.getChildPropertiesMapping(multiSelectChildPropertiesMapping());
    component.getStyle(multiSelectStyle())
    component.getRules(multiSelectRules())
    component.setRenderer(liquidRenderer);
  },
};

const MULTI_SELECT = 'multiSelect'

export { MULTI_SELECT };
