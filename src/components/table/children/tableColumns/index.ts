import {
  tableColumnsPropertiesMapping,
  tableColumnsProperties,
  tableColumnsVariants,
  tableColumnsChildProperties,
  tableColumnsChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { TABLE } from '../../index';
import { TABLE_EXPANDER_CELL } from '../tableExpanderCell';
import { TABLE_TEXT_CELL } from '../tableTextCell';
import { TABLE_AMOUNT_CELL } from '../tableAmountCell';
import { TABLE_DATE_CELL } from '../tableDateCell';
import { TABLE_BADGE_CELL } from '../tableBadgeCell';
import { TABLE_ACTION_LIST_CELL } from '../tableActionListCell';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDataTableHeaderSortToggle, IGRPDataTableHeaderSortDropdown, IGRPDataTableHeaderRowsSelected } from "@igrp/igrp-framework-react-design-system";',
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

    component.loadChildrenTypes([
      TABLE_EXPANDER_CELL, TABLE_TEXT_CELL,
      TABLE_AMOUNT_CELL, TABLE_DATE_CELL, TABLE_BADGE_CELL, TABLE_ACTION_LIST_CELL
    ]);

    component.loadAcceptedChildren([TABLE_EXPANDER_CELL, TABLE_TEXT_CELL, TABLE_AMOUNT_CELL,
      TABLE_DATE_CELL, TABLE_BADGE_CELL, TABLE_ACTION_LIST_CELL
    ])

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_COLUMNS = 'tableColumns'

export { TABLE_COLUMNS };