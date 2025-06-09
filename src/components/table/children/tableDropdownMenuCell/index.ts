import {
  tableDropdownMenuCellPropertiesMapping,
  tableDropdownMenuCellProperties,
  tableDropdownMenuCellVariants,
  tableDropdownMenuCellChildProperties,
  tableDropdownMenuCellChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';
import { TABLE_ALERT_DROPDOWN_ITEM } from '../tableAlertDropdownItem';
import { TABLE_CUSTOM_DROPDOWN_ITEM } from '../tableCustomDropdownItem';
import { TABLE_LINK_DROPDOWN_ITEM } from '../tableLinkDropdownItem';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDataTableDropdownMenu } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadComponentClass('IGRPDataTableDropdownMenu')
    component.loadVariants(tableDropdownMenuCellVariants());
    component.loadParent(TABLE)
    component.loadGroup('Columns')
    component.loadLabel('Dropdown Column')
    component.getProperties(tableDropdownMenuCellProperties());
    component.getPropertiesMapping(tableDropdownMenuCellPropertiesMapping());
    component.getChildProperties(tableDropdownMenuCellChildProperties());
    component.getChildPropertiesMapping(tableDropdownMenuCellChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_DROPDOWN_MENU_CELL }))

    component.loadStates([]);

    component.loadChildrenTypes([
      { name: TABLE_ALERT_DROPDOWN_ITEM, isDefault: false },
      { name: TABLE_CUSTOM_DROPDOWN_ITEM, isDefault: false },
      { name: TABLE_LINK_DROPDOWN_ITEM, isDefault: false },
    ]);

    component.loadAcceptedChildren([...component.childrenTypes])

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_DROPDOWN_MENU_CELL = 'tableDropdownMenuCell'

export { TABLE_DROPDOWN_MENU_CELL };