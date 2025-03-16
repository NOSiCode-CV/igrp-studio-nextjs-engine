import {
  tableActionListCellPropertiesMapping,
  tableActionListCellProperties,
  tableActionListCellVariants,
  tableActionListCellChildProperties,
  tableActionListCellChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';
import { TABLE_ALERT_ACTION } from '../tableAlertAction';
import { TABLE_MODAL_ACTION } from '../tableModalAction';
import { TABLE_LINK_ACTION } from '../tableLinkAction';
import { TABLE_DROPDOWN_MENU_CELL } from '../tableDropdownMenuCell';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDataTableButton } from "@igrp/igrp-framework-react-design-system";',
      'import { IGRPDataTableRowAction } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(tableActionListCellVariants());
    component.loadIcon('default')
    component.loadParent(TABLE)
    component.loadGroup('Columns')
    component.loadLabel('Actions Column')
    component.getProperties(tableActionListCellProperties());
    component.getPropertiesMapping(tableActionListCellPropertiesMapping());
    component.getChildProperties(tableActionListCellChildProperties());
    component.getChildPropertiesMapping(tableActionListCellChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_ACTION_LIST_CELL }))

    component.loadStates([]);

    component.loadChildrenTypes([TABLE_ALERT_ACTION, TABLE_MODAL_ACTION, TABLE_LINK_ACTION, TABLE_DROPDOWN_MENU_CELL])

    component.loadAcceptedChildren([...component.childrenTypes])

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_ACTION_LIST_CELL = 'tableActionListCell'

export { TABLE_ACTION_LIST_CELL };