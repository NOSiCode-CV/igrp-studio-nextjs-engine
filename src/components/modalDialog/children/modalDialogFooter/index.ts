import {
  modalDialogFooterPropertiesMapping,
  modalDialogFooterProperties,
  modalDialogFooterVariants,
  modalDialogFooterChildProperties,
  modalDialogFooterChildPropertiesMapping, modalDialogFooterRules, modalDialogFooterStyle,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { MODAL_DIALOG } from '../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';

export default {
  register(component: Component) {

    component.loadImports([
    ]);

    component.loadComponentClass('IGRPModalDialogFooter')
    component.loadVariants(modalDialogFooterVariants());
    component.loadParent(MODAL_DIALOG)
    component.loadLabel('Modal Dialog Footer')
    component.getProperties(modalDialogFooterProperties());
    component.getPropertiesMapping(modalDialogFooterPropertiesMapping());
    component.getChildProperties(modalDialogFooterChildProperties());
    component.getChildPropertiesMapping(modalDialogFooterChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: MODAL_DIALOG, name: MODAL_DIALOG_FOOTER }))
    component.getRules(modalDialogFooterRules())
    component.getStyle(modalDialogFooterStyle())
    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const MODAL_DIALOG_FOOTER = 'modalDialogFooter'

export { MODAL_DIALOG_FOOTER };