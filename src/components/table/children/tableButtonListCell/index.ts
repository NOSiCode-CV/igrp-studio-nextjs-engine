import {
  tableButtonListCellPropertiesMapping,
  tableButtonListCellProperties,
  tableButtonListCellVariants,
  tableButtonListCellChildProperties,
  tableButtonListCellChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';
import { TABLE_ALERT_BUTTON } from '../tableAlertButton';
import { TABLE_MODAL_BUTTON } from '../tableModalButton';
import { TABLE_LINK_BUTTON } from '../tableLinkButton';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDataTableButtonList } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadComponentClass('IGRPDataTableButtonList')
    component.loadVariants(tableButtonListCellVariants());
    component.loadParent(TABLE)
    component.loadGroup('Columns')
    component.loadLabel('Actions Column')
    component.getProperties(tableButtonListCellProperties());
    component.getPropertiesMapping(tableButtonListCellPropertiesMapping());
    component.getChildProperties(tableButtonListCellChildProperties());
    component.getChildPropertiesMapping(tableButtonListCellChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_BUTTON_LIST_CELL }))

    component.loadStates([]);

    component.loadChildrenTypes([
      { name: TABLE_ALERT_BUTTON, isDefault: false },
      { name: TABLE_MODAL_BUTTON, isDefault: false },
      { name: TABLE_LINK_BUTTON, isDefault: false },
    ]);

    component.loadAcceptedChildren([...component.childrenTypes])

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_BUTTON_LIST_CELL = 'tableButtonListCell'

export { TABLE_BUTTON_LIST_CELL };