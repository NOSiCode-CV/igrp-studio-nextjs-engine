import {
  tableCheckboxCellPropertiesMapping,
  tableCheckboxCellProperties,
  tableCheckboxCellVariants,
  tableCheckboxCellChildProperties,
  tableCheckboxCellChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDataTableCellCheckbox } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(tableCheckboxCellVariants());
    component.loadParent(TABLE)
    component.loadGroup('Columns')
    component.loadLabel('Check Column')
    component.getProperties(tableCheckboxCellProperties());
    component.getPropertiesMapping(tableCheckboxCellPropertiesMapping());
    component.getChildProperties(tableCheckboxCellChildProperties());
    component.getChildPropertiesMapping(tableCheckboxCellChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_CHECKBOX_CELL }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_CHECKBOX_CELL = 'tableCheckboxCell'

export { TABLE_CHECKBOX_CELL };