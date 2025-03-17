import {
  tableModalDropdownItemPropertiesMapping,
  tableModalDropdownItemProperties,
  tableModalDropdownItemVariants,
  tableModalDropdownItemChildProperties,
  tableModalDropdownItemChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';
import { TABLE_DROPDOWN_MENU_CELL } from '../tableDropdownMenuCell';

export default {
  register(component: Component) {

    component.loadComponentClass('IGRPDataTableDropdownMenuModal')

    component.loadImports([
      `import { ${component.componentClass} } from "@igrp/igrp-framework-react-design-system";`,
    ]);

    component.loadVariants(tableModalDropdownItemVariants());
    component.loadParent(TABLE_DROPDOWN_MENU_CELL)
    component.loadGroup('Columns')
    component.loadLabel('Modal Item')
    component.getProperties(tableModalDropdownItemProperties());
    component.getPropertiesMapping(tableModalDropdownItemPropertiesMapping());
    component.getChildProperties(tableModalDropdownItemChildProperties());
    component.getChildPropertiesMapping(tableModalDropdownItemChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_MODAL_DROPDOWN_ITEM }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_MODAL_DROPDOWN_ITEM = 'tableModalDropdownItem'

export { TABLE_MODAL_DROPDOWN_ITEM };