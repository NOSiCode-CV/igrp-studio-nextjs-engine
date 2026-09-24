import {
  tableModalButtonPropertiesMapping,
  tableModalButtonProperties,
  tableModalButtonVariants,
  tableModalButtonChildProperties,
  tableModalButtonChildPropertiesMapping,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';
import { TABLE_BUTTON_LIST_CELL } from '../tableButtonListCell';

export default {
  register(component: Component) {

    component.loadComponentClass('IGRPDataTableButtonModal')

    component.loadImports([
    ]);

    component.loadVariants(tableModalButtonVariants());
    component.loadParent(TABLE_BUTTON_LIST_CELL)
    component.loadGroup('Columns')
    component.loadLabel('Modal Button')
    component.getProperties(tableModalButtonProperties());
    component.getPropertiesMapping(tableModalButtonPropertiesMapping());
    component.getChildProperties(tableModalButtonChildProperties());
    component.getChildPropertiesMapping(tableModalButtonChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_MODAL_BUTTON }))

    component.loadStates([]);

    component.setRenderer(liquidRenderer);
  },
};

const TABLE_MODAL_BUTTON = 'tableModalButton'

export { TABLE_MODAL_BUTTON };