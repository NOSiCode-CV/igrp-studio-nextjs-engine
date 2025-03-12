import {
  tableColumnsPropertiesMapping,
  tableColumnsProperties,
  tableColumnsVariants,
  tableColumnsChildProperties,
  tableColumnsChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { TABLE } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { SortToggleIGRPDataTableHeader, SortDropdownIGRPDataTableHeader, RowsSelectedIGRPDataTableHeader } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(tableColumnsVariants());
    component.loadIcon('default')
    component.loadParent(TABLE)
    component.loadLabel('Table Column')
    component.getProperties(tableColumnsProperties());
    component.getPropertiesMapping(tableColumnsPropertiesMapping());
    component.getChildProperties(tableColumnsChildProperties());
    component.getChildPropertiesMapping(tableColumnsChildPropertiesMapping());

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_COLUMNS = 'tableColumns'

export { TABLE_COLUMNS };