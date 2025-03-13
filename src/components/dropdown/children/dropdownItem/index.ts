import {
  dropdownItemPropertiesMapping,
  dropdownItemProperties,
  dropdownItemVariants,
  dropdownItemChildProperties,
  dropdownItemChildPropertiesMapping,
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
    component.loadIcon('DropdownItemIcon')
    component.loadParent(DROPDOWN)
    component.loadLabel('Dropdown Item')
    component.getProperties(dropdownItemProperties());
    component.getPropertiesMapping(dropdownItemPropertiesMapping());
    component.getChildProperties(dropdownItemChildProperties());
    component.getChildPropertiesMapping(dropdownItemChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: DROPDOWN, name: DROPDOWN_ITEM }))

    component.loadStates([
      'const handle{{id}}Click = (e: any) => { service.handle{{id}}Click(e) };',
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
