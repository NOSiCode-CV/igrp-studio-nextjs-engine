import {
  tableColumnPropertiesMapping,
  tableColumnProperties,
  tableColumnVariants,
  tableColumnChildProperties,
  tableColumnChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { TABLE } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { SortToggleIGRPDataTableHeader, SortDropdownIGRPDataTableHeader, RowsSelectedIGRPDataTableHeader } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(tableColumnVariants());
    component.loadIcon('default')
    component.loadGroup(TABLE)
    component.loadLabel('Table Column')
    component.getProperties(tableColumnProperties());
    component.getPropertiesMapping(tableColumnPropertiesMapping());
    component.getChildProperties(tableColumnChildProperties());
    component.getChildPropertiesMapping(tableColumnChildPropertiesMapping());

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_COLUMN = 'tableColumn'

export { TABLE_COLUMN };