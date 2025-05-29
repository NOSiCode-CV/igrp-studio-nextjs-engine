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

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPModalDialog } from "@igrp/igrp-framework-react-design-system";'
    ]);

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

    component.setRenderer(hbsRenderer);
  },
};

const MODAL_DIALOG = 'modalDialog'

export { MODAL_DIALOG };