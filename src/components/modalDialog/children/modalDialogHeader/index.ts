import {
  modalDialogHeaderPropertiesMapping,
  modalDialogHeaderProperties,
  modalDialogHeaderVariants,
  modalDialogHeaderChildProperties,
  modalDialogHeaderChildPropertiesMapping, modalDialogHeaderStyle, modalDialogHeaderRules,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { MODAL_DIALOG } from '../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';

export default {
  register(component: Component) {

    component.loadImports([
    ]);

    component.loadComponentClass('IGRPModalDialogHeader')
    component.loadVariants(modalDialogHeaderVariants());
    component.loadParent(MODAL_DIALOG)
    component.loadLabel('Modal Dialog Header')
    component.getProperties(modalDialogHeaderProperties());
    component.getPropertiesMapping(modalDialogHeaderPropertiesMapping());
    component.getChildProperties(modalDialogHeaderChildProperties());
    component.getChildPropertiesMapping(modalDialogHeaderChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: MODAL_DIALOG, name: MODAL_DIALOG_HEADER }))
    component.getStyle(modalDialogHeaderStyle())
    component.getRules(modalDialogHeaderRules())
    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const MODAL_DIALOG_HEADER = 'modalDialogHeader'

export { MODAL_DIALOG_HEADER };