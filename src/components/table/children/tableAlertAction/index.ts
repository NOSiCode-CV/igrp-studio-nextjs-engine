import {
  tableAlertActionPropertiesMapping,
  tableAlertActionProperties,
  tableAlertActionVariants,
  tableAlertActionChildProperties,
  tableAlertActionChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';
import { TABLE_ACTION_LIST_CELL } from '../tableActionListCell';

export default {
  register(component: Component) {

    component.loadImports([
      `import { IGRPDataTableButtonAlert } from "@igrp/igrp-framework-react-design-system";`,
    ]);

    component.loadVariants(tableAlertActionVariants());
    component.loadParent(TABLE_ACTION_LIST_CELL)
    component.loadGroup('Columns')
    component.loadLabel('Alert Action')
    component.getProperties(tableAlertActionProperties());
    component.getPropertiesMapping(tableAlertActionPropertiesMapping());
    component.getChildProperties(tableAlertActionChildProperties());
    component.getChildPropertiesMapping(tableAlertActionChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: "tableActionButton" }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_ALERT_ACTION = 'tableAlertAction'

export { TABLE_ALERT_ACTION };