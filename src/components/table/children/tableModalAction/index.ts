import {
  tableModalActionPropertiesMapping,
  tableModalActionProperties,
  tableModalActionVariants,
  tableModalActionChildProperties,
  tableModalActionChildPropertiesMapping, tableModalActionInteractions, tableModalActionInteractionsMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';
import { TABLE_ACTION_LIST_CELL } from '../tableActionListCell';

export default {
  register(component: Component) {

    component.loadImports([
    ]);

    component.loadComponentClass('IGRPDataTableButtonModal')
    component.loadVariants(tableModalActionVariants());
    component.loadParent(TABLE_ACTION_LIST_CELL)
    component.loadGroup('Columns')
    component.loadLabel('Modal Action')
    component.getInteractions(tableModalActionInteractions());
    component.getInteractionsMapping(tableModalActionInteractionsMapping());
    component.getProperties(tableModalActionProperties());
    component.getPropertiesMapping(tableModalActionPropertiesMapping());
    component.getChildProperties(tableModalActionChildProperties());
    component.getChildPropertiesMapping(tableModalActionChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_MODAL_ACTION }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_MODAL_ACTION = 'tableModalAction'

export { TABLE_MODAL_ACTION };