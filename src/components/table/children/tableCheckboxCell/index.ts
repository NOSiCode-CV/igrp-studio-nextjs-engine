import {
  tableCheckboxCellPropertiesMapping,
  tableCheckboxCellProperties,
  tableCheckboxCellVariants,
  tableCheckboxCellChildProperties,
  tableCheckboxCellChildPropertiesMapping,
  tableCheckboxCellInteractions,
  tableCheckboxCellInteractionsMapping,
  tableCheckboxCellRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPDataTableCellCheckbox')
    component.loadVariants(tableCheckboxCellVariants());
    component.loadParent(TABLE)
    component.loadGroup('Columns')
    component.loadLabel('Check Column')
    component.getProperties(tableCheckboxCellProperties());
    component.getPropertiesMapping(tableCheckboxCellPropertiesMapping());
    component.getChildProperties(tableCheckboxCellChildProperties());
    component.getChildPropertiesMapping(tableCheckboxCellChildPropertiesMapping());
    component.getInteractions(tableCheckboxCellInteractions());
    component.getInteractionsMapping(tableCheckboxCellInteractionsMapping());
    component.getRules(tableCheckboxCellRules());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_CHECKBOX_CELL }))

    component.loadStates([]);

    component.setRenderer(liquidRenderer);
  },
};

const TABLE_CHECKBOX_CELL = 'tableCheckboxCell'

export { TABLE_CHECKBOX_CELL };