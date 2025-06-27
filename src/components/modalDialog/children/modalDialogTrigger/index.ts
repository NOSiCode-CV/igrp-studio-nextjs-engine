import {
  modalDialogTriggerPropertiesMapping,
  modalDialogTriggerProperties,
  modalDialogTriggerVariants,
  modalDialogTriggerChildProperties,
  modalDialogTriggerChildPropertiesMapping, modalDialogTriggerInteractions, modalDialogTriggerInteractionsMapping, modalDialogTriggerStyle, modalDialogTriggerRules,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { MODAL_DIALOG } from '../../index';
import { BUTTON } from '../../../button/index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPModalDialogTrigger')
    component.loadVariants(modalDialogTriggerVariants());
    component.loadParent(MODAL_DIALOG)
    component.loadLabel('Modal Dialog Trigger')
    component.getInteractions(modalDialogTriggerInteractions());
    component.getInteractionsMapping(modalDialogTriggerInteractionsMapping());
    component.getProperties(modalDialogTriggerProperties());
    component.getPropertiesMapping(modalDialogTriggerPropertiesMapping());
    component.getChildProperties(modalDialogTriggerChildProperties());
    component.getChildPropertiesMapping(modalDialogTriggerChildPropertiesMapping());
    component.getStyle(modalDialogTriggerStyle())
    component.getRules(modalDialogTriggerRules())
    component.loadDefaultChildren([{ name: BUTTON }])
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

    component.setRenderer(hbsRenderer);
  },
};

const MODAL_DIALOG_TRIGGER = 'modalDialogTrigger'

export { MODAL_DIALOG_TRIGGER };
