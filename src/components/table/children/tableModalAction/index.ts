import {
  tableModalActionPropertiesMapping,
  tableModalActionProperties,
  tableModalActionVariants,
  tableModalActionChildProperties,
  tableModalActionChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';
import { TABLE_ACTION_LIST_CELL } from '../tableActionListCell';

export default {
  register(component: Component) {

    component.loadImports([
      `import { IGRPDataTableButtonModal } from "@igrp/igrp-framework-react-design-system";`,
    ]);

    component.loadVariants(tableModalActionVariants());
    component.loadIcon('default')
    component.loadParent(TABLE_ACTION_LIST_CELL)
    component.loadGroup('Columns')
    component.loadLabel('Modal Action')
    component.getProperties(tableModalActionProperties());
    component.getPropertiesMapping(tableModalActionPropertiesMapping());
    component.getChildProperties(tableModalActionChildProperties());
    component.getChildPropertiesMapping(tableModalActionChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: "tableActionButton" }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_MODAL_ACTION = 'tableModalAction'

export { TABLE_MODAL_ACTION };