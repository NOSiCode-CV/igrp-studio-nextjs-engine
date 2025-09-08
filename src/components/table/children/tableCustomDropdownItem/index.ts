import {
  tableCustomDropdownItemPropertiesMapping,
  tableCustomDropdownItemProperties,
  tableCustomDropdownItemVariants,
  tableCustomDropdownItemChildProperties,
  tableCustomDropdownItemChildPropertiesMapping, tableCustomDropdownItemInteractions, tableCustomDropdownItemRules,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';
import { TABLE_DROPDOWN_MENU_CELL } from '../tableDropdownMenuCell';

export default {
  register(component: Component) {

    component.loadComponentClass('IGRPDataTableDropdownMenuCustom')

    component.loadImports([
    ]);

    component.loadVariants(tableCustomDropdownItemVariants());
    component.loadParent(TABLE_DROPDOWN_MENU_CELL)
    component.loadGroup('Columns')
    component.loadLabel('Custom Item')
    component.getProperties(tableCustomDropdownItemProperties());
    component.getPropertiesMapping(tableCustomDropdownItemPropertiesMapping());
    component.getInteractions(tableCustomDropdownItemInteractions());
    component.getChildProperties(tableCustomDropdownItemChildProperties());
    component.getChildPropertiesMapping(tableCustomDropdownItemChildPropertiesMapping());
    component.getRules(tableCustomDropdownItemRules());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_CUSTOM_DROPDOWN_ITEM }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_CUSTOM_DROPDOWN_ITEM = 'tableCustomDropdownItem'

export { TABLE_CUSTOM_DROPDOWN_ITEM };