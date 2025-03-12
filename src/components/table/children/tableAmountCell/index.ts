import {
  tableAmountCellPropertiesMapping,
  tableAmountCellProperties,
  tableAmountCellVariants,
  tableAmountCellChildProperties,
  tableAmountCellChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { AmountIGRPDataTableCell } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(tableAmountCellVariants());
    component.loadIcon('default')
    component.loadParent(TABLE)
    component.loadGroup('Columns')
    component.loadLabel('Amount Column')
    component.getProperties(tableAmountCellProperties());
    component.getPropertiesMapping(tableAmountCellPropertiesMapping());
    component.getChildProperties(tableAmountCellChildProperties());
    component.getChildPropertiesMapping(tableAmountCellChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_AMOUNT_CELL }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_AMOUNT_CELL = 'tableAmountCell'

export { TABLE_AMOUNT_CELL };