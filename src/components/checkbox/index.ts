import {
  checkboxPropertiesMapping,
  checkboxProperties,
  checkboxVariants,
  checkboxChildProperties,
  checkboxChildPropertiesMapping, checkboxInteractions, checkboxInteractionsMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPCheckbox } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(checkboxVariants());
    component.loadGroup('formElements')
    component.loadLabel('Checkbox')
    component.getProperties(checkboxProperties());
    component.getPropertiesMapping(checkboxPropertiesMapping());
    component.getInteractions(checkboxInteractions());
    component.getInteractionsMapping(checkboxInteractionsMapping());
    component.getChildProperties(checkboxChildProperties()); // TODO: handle a way to fetch parent properties
    component.getChildPropertiesMapping(checkboxChildPropertiesMapping()); // TODO: handle a way to fetch parent properties

    component.loadStates([
      'const [isChecked, setIsChecked] = useState(false);'
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const CHECKBOX = 'checkbox'

export { CHECKBOX };