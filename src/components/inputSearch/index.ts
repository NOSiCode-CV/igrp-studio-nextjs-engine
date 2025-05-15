import {
  inputSearchPropertiesMapping,
  inputSearchProperties,
  inputSearchVariants,
  inputSearchChildProperties,
  inputSearchChildPropertiesMapping, inputSearchData, inputSearchInteractions,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPInputSearch } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(inputSearchVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Input Search')
    component.getProperties(inputSearchProperties());
    component.getPropertiesMapping(inputSearchPropertiesMapping());
    component.getChildProperties(inputSearchChildProperties());
    component.getChildPropertiesMapping(inputSearchChildPropertiesMapping());
    component.getInteractions(inputSearchInteractions());
    component.getData(inputSearchData());

    component.loadStates([
      {
        state: {
          id: '',
          name: 'inputSearch{{id}}Value',
          type: 'string',
          defaultValue: '{{value}}'
        },
        required: false
      }
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const INPUT_SEARCH = 'inputSearch'

export { INPUT_SEARCH };
