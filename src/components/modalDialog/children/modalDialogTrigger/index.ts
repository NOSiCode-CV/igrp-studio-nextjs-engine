import {
  modalDialogTriggerPropertiesMapping,
  modalDialogTriggerProperties,
  modalDialogTriggerVariants,
  modalDialogTriggerChildProperties,
  modalDialogTriggerChildPropertiesMapping,
  modalDialogTriggerInteractions,
  modalDialogTriggerInteractionsMapping,
  modalDialogTriggerStyle,
  modalDialogTriggerRules,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { MODAL_DIALOG } from '../../index';
import { BUTTON } from '../../../button/index';
import type { Layout } from '../../../../interfaces/types';

// The registry infers the renderer type from the function name, so keep the
// lowercase "liquid" prefix until renderer metadata is made explicit.
function liquidModalDialogTriggerRenderer(
  component: Layout,
  parentComponent?: Layout,
  element?: Component,
  parentElement?: Component,
) {
  if (component.children?.length !== 1) {
    return liquidRenderer(component, parentComponent, element, parentElement);
  }

  const triggerComponent: Layout = {
    ...component,
    properties: {
      ...component.properties,
      commonProperties: {
        ...component.properties?.commonProperties,
        customProperties: {
          ...component.properties?.commonProperties?.customProperties,
          asChild: true,
        },
      },
    },
  };

  return liquidRenderer(triggerComponent, parentComponent, element, parentElement);
}

export default {
  register(component: Component) {
    component.loadImports([]);

    component.loadComponentClass('IGRPModalDialogTrigger');
    component.loadVariants(modalDialogTriggerVariants());
    component.loadParent(MODAL_DIALOG);
    component.loadLabel('Modal Dialog Trigger');
    component.getInteractions(modalDialogTriggerInteractions());
    component.getInteractionsMapping(modalDialogTriggerInteractionsMapping());
    component.getProperties(modalDialogTriggerProperties());
    component.getPropertiesMapping(modalDialogTriggerPropertiesMapping());
    component.getChildProperties(modalDialogTriggerChildProperties());
    component.getChildPropertiesMapping(modalDialogTriggerChildPropertiesMapping());
    component.getStyle(modalDialogTriggerStyle());
    component.getRules(modalDialogTriggerRules());
    component.loadChildrenMax(1);
    component.loadDefaultChildren([{ name: BUTTON }]);
    component.loadStates([
      {
        state: {
          id: '',
          name: '{{id}}Disabled',
          type: 'boolean',
          defaultValue: '{{value}}',
        },
        required: true,
      },
    ]);

    component.setRenderer(liquidModalDialogTriggerRenderer);
  },
};

const MODAL_DIALOG_TRIGGER = 'modalDialogTrigger';

export { MODAL_DIALOG_TRIGGER };
