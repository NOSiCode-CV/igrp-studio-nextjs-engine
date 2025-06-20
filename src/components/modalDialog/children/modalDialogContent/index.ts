import {
  modalDialogContentPropertiesMapping,
  modalDialogContentProperties,
  modalDialogContentVariants,
  modalDialogContentChildProperties,
  modalDialogContentChildPropertiesMapping, modalDialogContentStyle, modalDialogContentRules,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { MODAL_DIALOG } from '../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';

export default {
  register(component: Component) {

    component.loadImports([
    ]);

    component.loadComponentClass('IGRPModalDialogContent')
    component.loadVariants(modalDialogContentVariants());
    component.loadParent(MODAL_DIALOG)
    component.loadLabel('Modal Dialog Content')
    component.getProperties(modalDialogContentProperties());
    component.getPropertiesMapping(modalDialogContentPropertiesMapping());
    component.getChildProperties(modalDialogContentChildProperties());
    component.getChildPropertiesMapping(modalDialogContentChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: MODAL_DIALOG, name: MODAL_DIALOG_CONTENT }))
    component.getStyle(modalDialogContentStyle())
    component.getRules(modalDialogContentRules())
    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const MODAL_DIALOG_CONTENT = 'modalDialogContent'

export { MODAL_DIALOG_CONTENT };