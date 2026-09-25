import {
  tableColumnsPropertiesMapping,
  tableColumnsProperties,
  tableColumnsVariants,
  tableColumnsChildProperties,
  tableColumnsChildPropertiesMapping,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { TABLE } from '../../index';
import { TABLE_EXPANDER_CELL } from '../tableExpanderCell';
import { TABLE_TEXT_CELL } from '../tableTextCell';
import { TABLE_AMOUNT_CELL } from '../tableAmountCell';
import { TABLE_DATE_CELL } from '../tableDateCell';
import { TABLE_BADGE_CELL } from '../tableBadgeCell';
import { TABLE_LINK_CELL } from '../tableLinkCell/index';
import { TABLE_ACTION_LIST_CELL } from '../tableActionListCell';
import { TABLE_CHECKBOX_CELL } from '../tableCheckboxCell/index';
import { TABLE_HIDDEN_CELL } from '../tableHiddenCell/index';
import { TABLE_TOOLTIP_CELL } from '../tableTooltipCell/index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDataTableHeaderSortToggle, IGRPDataTableHeaderSortDropdown, IGRPDataTableHeaderRowsSelect } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(tableColumnsVariants());
    component.loadParent(TABLE)
    component.loadLabel('Table Column')
    component.getProperties(tableColumnsProperties());
    component.getPropertiesMapping(tableColumnsPropertiesMapping());
    component.getChildProperties(tableColumnsChildProperties());
    component.getChildPropertiesMapping(tableColumnsChildPropertiesMapping());

    component.loadStates([]);

    component.loadChildrenTypes([
      { name: TABLE_CHECKBOX_CELL, isDefault: false },
      { name: TABLE_EXPANDER_CELL, isDefault: false },
      { name: TABLE_TEXT_CELL, isDefault: false },
      { name: TABLE_AMOUNT_CELL, isDefault: false },
      { name: TABLE_DATE_CELL, isDefault: false },
      { name: TABLE_BADGE_CELL, isDefault: false },
      { name: TABLE_LINK_CELL, isDefault: false },
      { name: TABLE_TOOLTIP_CELL, isDefault: false },
      { name: TABLE_ACTION_LIST_CELL, isDefault: false },
      { name: TABLE_HIDDEN_CELL, isDefault: false },
    ]);

    component.loadAcceptedChildren([
      { name: TABLE_CHECKBOX_CELL, isDefault: false },
      { name: TABLE_EXPANDER_CELL, isDefault: false },
      { name: TABLE_TEXT_CELL, isDefault: false },
      { name: TABLE_AMOUNT_CELL, isDefault: false },
      { name: TABLE_DATE_CELL, isDefault: false },
      { name: TABLE_BADGE_CELL, isDefault: false },
      { name: TABLE_LINK_CELL, isDefault: false },
      { name: TABLE_TOOLTIP_CELL, isDefault: false },
      { name: TABLE_ACTION_LIST_CELL, isDefault: false },
      { name: TABLE_HIDDEN_CELL, isDefault: false },
    ])

    component.setRenderer(liquidRenderer);
  },
};

const TABLE_COLUMNS = 'tableColumns'

export { TABLE_COLUMNS };