import {
  dropdownPropertiesMapping,
  dropdownProperties,
  dropdownVariants,
  dropdownChildProperties,
  dropdownChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { DROPDOWN_ITEM } from './children/dropdownItem';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDropdown } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(dropdownVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Dropdown')
    component.getProperties(dropdownProperties());
    component.getPropertiesMapping(dropdownPropertiesMapping());
    component.getChildProperties(dropdownChildProperties());
    component.getChildPropertiesMapping(dropdownChildPropertiesMapping());

    component.loadChildrenTypes([{ name: DROPDOWN_ITEM, isDefault: true }]);

    component.loadAcceptedChildren([...component.childrenTypes])

    component.setRenderer(hbsRenderer);
  },
};

const DROPDOWN = 'dropdown'

export { DROPDOWN };
