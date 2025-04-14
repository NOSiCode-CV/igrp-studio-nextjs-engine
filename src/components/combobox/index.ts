import {
  comboboxPropertiesMapping,
  comboboxProperties,
  comboboxVariants,
  comboboxChildProperties,
  comboboxChildPropertiesMapping, comboboxInteractions, comboboxInteractionsMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPCombobox } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(comboboxVariants());
    component.loadGroup('formElements')
    component.loadLabel('Combobox')
    component.getProperties(comboboxProperties());
    component.getPropertiesMapping(comboboxPropertiesMapping());
    component.getInteractions(comboboxInteractions());
    component.getInteractionsMapping(comboboxInteractionsMapping());
    component.getChildProperties(comboboxChildProperties());
    component.getChildPropertiesMapping(comboboxChildPropertiesMapping());

    component.loadStates([
      'const [input{{id}}Value, setInput{{id}}Value] = useState("{{value}}");'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const COMBOBOX = 'combobox'

export { COMBOBOX };
