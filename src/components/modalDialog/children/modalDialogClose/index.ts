import {
  modalDialogClosePropertiesMapping,
  modalDialogCloseProperties,
  modalDialogCloseVariants,
  modalDialogCloseChildProperties,
  modalDialogCloseChildPropertiesMapping, modalDialogCloseInteractions, modalDialogCloseInteractionsMapping, modalDialogCloseStyle, modalDialogCloseRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { MODAL_DIALOG } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPModalDialogClose')
    component.loadVariants(modalDialogCloseVariants());
    component.loadParent(MODAL_DIALOG)
    component.loadLabel('Modal Dialog Close')
    component.getInteractions(modalDialogCloseInteractions());
    component.getInteractionsMapping(modalDialogCloseInteractionsMapping());
    component.getProperties(modalDialogCloseProperties());
    component.getPropertiesMapping(modalDialogClosePropertiesMapping());
    component.getChildProperties(modalDialogCloseChildProperties());
    component.getChildPropertiesMapping(modalDialogCloseChildPropertiesMapping());
    component.getStyle(modalDialogCloseStyle())
    component.getRules(modalDialogCloseRules())
    component.loadStates([
      {
        state: {
          id: '',
          name: '{{id}}Disabled',
          type: 'boolean',
          defaultValue: '{{value}}'
        },
        required: true
      },
    ]);

    component.setRenderer(liquidRenderer);
  },
};

const MODAL_DIALOG_CLOSE = 'modalDialogClose'

export { MODAL_DIALOG_CLOSE };
