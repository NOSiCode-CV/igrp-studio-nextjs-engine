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
import { MODAL_DIALOG_HEADER } from '../modalDialogHeader/index';
import { MODAL_DIALOG_FOOTER } from '../modalDialogFooter/index';
import { FRAGMENT } from '../../../fragment/index';

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

    component.loadDefaultChildren([
      { name: MODAL_DIALOG_HEADER },
      { name: FRAGMENT },
      { name: MODAL_DIALOG_FOOTER },
    ])

    component.loadChildrenTypes([
      { name: MODAL_DIALOG_HEADER, isDefault: false },
      { name: MODAL_DIALOG_FOOTER, isDefault: false },
    ])

    component.loadAcceptedChildren([
      { name: MODAL_DIALOG_HEADER, isDefault: false },
      { name: MODAL_DIALOG_FOOTER, isDefault: false },
    ])

    component.setRenderer(hbsRenderer);
  },
};

const MODAL_DIALOG_CONTENT = 'modalDialogContent'

export { MODAL_DIALOG_CONTENT };