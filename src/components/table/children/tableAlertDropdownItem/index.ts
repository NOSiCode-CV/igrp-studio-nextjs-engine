import {
  tableAlertDropdownItemPropertiesMapping,
  tableAlertDropdownItemProperties,
  tableAlertDropdownItemVariants,
  tableAlertDropdownItemChildProperties,
  tableAlertDropdownItemChildPropertiesMapping, tableAlertDropdownItemInteractions,
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
    ]);

    component.loadVariants(tableAlertDropdownItemVariants());
    component.loadParent(TABLE_DROPDOWN_MENU_CELL)
    component.loadGroup('Columns')
    component.loadLabel('Alert Item')
    component.getProperties(tableAlertDropdownItemProperties());
    component.getPropertiesMapping(tableAlertDropdownItemPropertiesMapping());
    component.getInteractions(tableAlertDropdownItemInteractions());
    component.getChildProperties(tableAlertDropdownItemChildProperties());
    component.getChildPropertiesMapping(tableAlertDropdownItemChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_ALERT_DROPDOWN_ITEM }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_ALERT_DROPDOWN_ITEM = 'tableAlertDropdownItem'

export { TABLE_ALERT_DROPDOWN_ITEM };