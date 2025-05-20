import {
  comboboxPropertiesMapping,
  comboboxProperties,
  comboboxVariants,
  comboboxChildProperties,
  comboboxChildPropertiesMapping, comboboxInteractions, comboboxInteractionsMapping, comboboxData,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPCombobox } from "@igrp/igrp-framework-react-design-system";',
      'import { IGRPOptionsProps } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadStates([
      {
        state: {
          id: '',
          name: 'select{{id}}Value',
          type: 'string',
          defaultValue: '{{value}}'
        },
        required: false
      },
      {
        state: {
          id: '',
          name: 'select{{id}}Options',
          type: 'IGRPOptionsProps[]',
          defaultValue: '[]'
        },
        required: true
      }
    ]);

    component.loadVariants(comboboxVariants());
    component.loadGroup('formElements')
    component.loadLabel('Combobox')
    component.getProperties(comboboxProperties());
    component.getPropertiesMapping(comboboxPropertiesMapping());
    component.getInteractions(comboboxInteractions());
    component.getInteractionsMapping(comboboxInteractionsMapping());
    component.getData(comboboxData());
    component.getChildProperties(comboboxChildProperties());
    component.getChildPropertiesMapping(comboboxChildPropertiesMapping());

    component.setRenderer(hbsRenderer);
  },
};

const COMBOBOX = 'combobox'

export { COMBOBOX };
