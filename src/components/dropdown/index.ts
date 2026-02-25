import {
  dropdownPropertiesMapping,
  dropdownProperties,
  dropdownVariants,
  dropdownChildProperties,
  dropdownChildPropertiesMapping, dropdownRules, dropdownStyle, dropdownData,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { DROPDOWN_ITEM } from './children/dropdownItem';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPDropdownMenu')
    component.loadVariants(dropdownVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Dropdown')
    component.getProperties(dropdownProperties());
    component.getPropertiesMapping(dropdownPropertiesMapping());
    component.getChildProperties(dropdownChildProperties());
    component.getChildPropertiesMapping(dropdownChildPropertiesMapping());

    component.loadChildrenTypes([{ name: DROPDOWN_ITEM, isDefault: true }]);

    component.loadAcceptedChildren([...component.childrenTypes])

    component.getData(dropdownData())

    component.getRules(dropdownRules())

    component.getStyle(dropdownStyle())

    component.setRenderer(hbsRenderer);
  },
};

const DROPDOWN = 'dropdown'

export { DROPDOWN };
