import {
  modalDialogTitlePropertiesMapping,
  modalDialogTitleProperties,
  modalDialogTitleVariants,
  modalDialogTitleChildProperties,
  modalDialogTitleChildPropertiesMapping, modalDialogTitleStyle, modalDialogTitleRules,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { MODAL_DIALOG } from '../../index';

export default {
  register(component: Component) {

    component.loadImports([
    ]);

    component.loadComponentClass('IGRPModalDialogTitle')
    component.loadVariants(modalDialogTitleVariants());
    component.loadParent(MODAL_DIALOG)
    component.loadLabel('Modal Dialog Title')
    component.getProperties(modalDialogTitleProperties());
    component.getPropertiesMapping(modalDialogTitlePropertiesMapping());
    component.getChildProperties(modalDialogTitleChildProperties());
    component.getChildPropertiesMapping(modalDialogTitleChildPropertiesMapping());
    component.getStyle(modalDialogTitleStyle())
    component.getRules(modalDialogTitleRules())
    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const MODAL_DIALOG_TITLE = 'modalDialogTitle'

export { MODAL_DIALOG_TITLE };