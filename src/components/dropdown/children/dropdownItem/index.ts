import {
  dropdownItemPropertiesMapping,
  dropdownItemProperties,
  dropdownItemVariants,
  dropdownItemChildProperties,
  dropdownItemChildPropertiesMapping,
  dropdownItemInteractions,
  dropdownItemInteractionsMapping,
  dropdownItemRules,
  dropdownItemStyle,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { TEMPLATES } from '../../../../utils/constants';
import { replaceTemplate } from '../../../../utils/helpers';
import { DROPDOWN } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDropdownItem } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(dropdownItemVariants());
    component.loadParent(DROPDOWN)
    component.loadLabel('Dropdown Item')
    component.getProperties(dropdownItemProperties());
    component.getPropertiesMapping(dropdownItemPropertiesMapping());
    component.getInteractions(dropdownItemInteractions());
    component.getInteractionsMapping(dropdownItemInteractionsMapping());
    component.getChildProperties(dropdownItemChildProperties());
    component.getChildPropertiesMapping(dropdownItemChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: DROPDOWN, name: DROPDOWN_ITEM }))
    component.getRules(dropdownItemRules())
    component.getStyle(dropdownItemStyle())
    component.loadStates([
    ]);

    component.loadServiceMethods(
      [
        `handle{{id}}Click: (data?: Record<string, unknown>) => void;`
      ]
    )

    component.setRenderer(hbsRenderer);
  },
};

const DROPDOWN_ITEM = 'dropdownItem'

export { DROPDOWN_ITEM };
