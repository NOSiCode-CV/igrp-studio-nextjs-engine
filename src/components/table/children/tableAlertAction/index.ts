import {
  tableAlertActionPropertiesMapping,
  tableAlertActionProperties,
  tableAlertActionVariants,
  tableAlertActionChildProperties,
  tableAlertActionChildPropertiesMapping,
  tableAlertActionInteractions,
  tableAlertActionInteractionsMapping,
  tableAlertActionRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';
import { TABLE_ACTION_LIST_CELL } from '../tableActionListCell';

export default {
  register(component: Component) {

    component.loadImports([
    ]);

    component.loadComponentClass('IGRPDataTableButtonAlert');
    component.loadVariants(tableAlertActionVariants());
    component.loadParent(TABLE_ACTION_LIST_CELL);
    component.loadGroup('Columns');
    component.loadLabel('Alert Action');
    component.getProperties(tableAlertActionProperties());
    component.getPropertiesMapping(tableAlertActionPropertiesMapping());
    component.getInteractions(tableAlertActionInteractions());
    component.getInteractionsMapping(tableAlertActionInteractionsMapping());
    component.getChildProperties(tableAlertActionChildProperties());
    component.getChildPropertiesMapping(tableAlertActionChildPropertiesMapping());
    component.getRules(tableAlertActionRules());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_ALERT_ACTION }))

    component.loadStates([]);

    component.setRenderer(liquidRenderer);
  },
};

const TABLE_ALERT_ACTION = 'tableAlertAction'

export { TABLE_ALERT_ACTION };