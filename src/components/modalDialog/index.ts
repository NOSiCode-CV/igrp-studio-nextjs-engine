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
import { MODAL_DIALOG_CONTENT } from './children/modalDialogContent/index';
import { MODAL_DIALOG_FOOTER } from './children/modalDialogFooter/index';
import { MODAL_DIALOG_HEADER } from './children/modalDialogHeader/index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPModalDialog')
    component.loadVariants(modalDialogVariants());
    component.loadChildrenMax(3);
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

    component.loadChildrenTypes([
      { name: MODAL_DIALOG_HEADER, isDefault: true },
      { name: MODAL_DIALOG_CONTENT, isDefault: true },
      { name: MODAL_DIALOG_FOOTER, isDefault: true },
    ])

    component.loadAcceptedChildren([
      { name: MODAL_DIALOG_HEADER, isDefault: true },
      { name: MODAL_DIALOG_CONTENT, isDefault: true },
      { name: MODAL_DIALOG_FOOTER, isDefault: true },
    ])

    component.setRenderer(hbsRenderer);
  },
};

const MODAL_DIALOG = 'modalDialog'

export { MODAL_DIALOG };