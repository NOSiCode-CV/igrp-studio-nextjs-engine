import {
  tableAlertDropdownItemPropertiesMapping,
  tableAlertDropdownItemProperties,
  tableAlertDropdownItemVariants,
  tableAlertDropdownItemChildProperties,
  tableAlertDropdownItemChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';
import { TABLE_DROPDOWN_MENU_CELL } from '../tableDropdownMenuCell';

export default {
  register(component: Component) {

    component.loadComponentClass('IGRPDataTableDropdownMenuAlert')

    component.loadImports([
      `import { ${component.componentClass} } from "@igrp/igrp-framework-react-design-system";`,
    ]);

    component.loadVariants(tableAlertDropdownItemVariants());
    component.loadParent(TABLE_DROPDOWN_MENU_CELL)
    component.loadGroup('Columns')
    component.loadLabel('Alert Item')
    component.getProperties(tableAlertDropdownItemProperties());
    component.getPropertiesMapping(tableAlertDropdownItemPropertiesMapping());
    component.getChildProperties(tableAlertDropdownItemChildProperties());
    component.getChildPropertiesMapping(tableAlertDropdownItemChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_ALERT_DROPDOWN_ITEM }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_ALERT_DROPDOWN_ITEM = 'tableAlertDropdownItem'

export { TABLE_ALERT_DROPDOWN_ITEM };