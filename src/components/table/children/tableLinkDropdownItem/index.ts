import {
  tableLinkDropdownItemPropertiesMapping,
  tableLinkDropdownItemProperties,
  tableLinkDropdownItemVariants,
  tableLinkDropdownItemChildProperties,
  tableLinkDropdownItemChildPropertiesMapping, tableLinkDropdownItemInteractions, tableLinkDropdownItemRules,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';
import { TABLE_DROPDOWN_MENU_CELL } from '../tableDropdownMenuCell';

export default {
  register(component: Component) {

    component.loadComponentClass('IGRPDataTableDropdownMenuLink')

    component.loadImports([
    ]);

    component.loadVariants(tableLinkDropdownItemVariants());
    component.loadParent(TABLE_DROPDOWN_MENU_CELL)
    component.loadGroup('Columns')
    component.loadLabel('Link Item')
    component.getProperties(tableLinkDropdownItemProperties());
    component.getPropertiesMapping(tableLinkDropdownItemPropertiesMapping());
    component.getInteractions(tableLinkDropdownItemInteractions());
    component.getChildProperties(tableLinkDropdownItemChildProperties());
    component.getChildPropertiesMapping(tableLinkDropdownItemChildPropertiesMapping());
    component.getRules(tableLinkDropdownItemRules());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_LINK_DROPDOWN_ITEM }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_LINK_DROPDOWN_ITEM = 'tableLinkDropdownItem'

export { TABLE_LINK_DROPDOWN_ITEM };