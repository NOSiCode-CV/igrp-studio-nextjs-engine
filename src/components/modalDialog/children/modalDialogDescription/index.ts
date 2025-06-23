import {
  modalDialogDescriptionPropertiesMapping,
  modalDialogDescriptionProperties,
  modalDialogDescriptionVariants,
  modalDialogDescriptionChildProperties,
  modalDialogDescriptionChildPropertiesMapping, modalDialogDescriptionStyle, modalDialogDescriptionRules,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { MODAL_DIALOG } from '../../index';

export default {
  register(component: Component) {

    component.loadImports([
    ]);

    component.loadComponentClass('IGRPModalDialogDescription')
    component.loadVariants(modalDialogDescriptionVariants());
    component.loadParent(MODAL_DIALOG)
    component.loadLabel('Modal Dialog Description')
    component.getProperties(modalDialogDescriptionProperties());
    component.getPropertiesMapping(modalDialogDescriptionPropertiesMapping());
    component.getChildProperties(modalDialogDescriptionChildProperties());
    component.getChildPropertiesMapping(modalDialogDescriptionChildPropertiesMapping());
    component.getStyle(modalDialogDescriptionStyle())
    component.getRules(modalDialogDescriptionRules())
    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const MODAL_DIALOG_DESCRIPTION = 'modalDialogDescription'

export { MODAL_DIALOG_DESCRIPTION };