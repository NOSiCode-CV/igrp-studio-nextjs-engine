import {
  modalDialogPropertiesMapping,
  modalDialogProperties,
  modalDialogVariants,
  modalDialogChildProperties,
  modalDialogChildPropertiesMapping,
  modalDialogInteractions,
  modalDialogInteractionsMapping,
  modalDialogStyle,
  modalDialogRules,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { TABLE_TEXT_CELL } from '../table/children/tableTextCell';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPModalDialog')
    component.loadVariants(modalDialogVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Modal Dialog')
    component.getProperties(modalDialogProperties());
    component.getPropertiesMapping(modalDialogPropertiesMapping());
    component.getChildProperties(modalDialogChildProperties());
    component.getChildPropertiesMapping(modalDialogChildPropertiesMapping());
    component.getInteractions(modalDialogInteractions());
    component.getInteractionsMapping(modalDialogInteractionsMapping());
    component.getStyle(modalDialogStyle())
    component.getRules(modalDialogRules())
    component.loadStates([
    ]);
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: MODAL_DIALOG }))

    component.setRenderer(hbsRenderer);
  },
};

const MODAL_DIALOG = 'modalDialog'

export { MODAL_DIALOG };