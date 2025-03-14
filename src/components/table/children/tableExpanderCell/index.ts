import {
  tableExpanderCellPropertiesMapping,
  tableExpanderCellProperties,
  tableExpanderCellVariants,
  tableExpanderCellChildProperties,
  tableExpanderCellChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDataTableCellExpander } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(tableExpanderCellVariants());
    component.loadIcon('default')
    component.loadParent(TABLE)
    component.loadGroup('Columns')
    component.loadLabel('Expandable Column')
    component.getProperties(tableExpanderCellProperties());
    component.getPropertiesMapping(tableExpanderCellPropertiesMapping());
    component.getChildProperties(tableExpanderCellChildProperties());
    component.getChildPropertiesMapping(tableExpanderCellChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_EXPANDER_CELL }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_EXPANDER_CELL = 'tableExpanderCell'

export { TABLE_EXPANDER_CELL };