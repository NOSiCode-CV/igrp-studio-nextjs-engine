import {
  alertDialogPropertiesMapping,
  alertDialogProperties,
  alertDialogVariants,
  alertDialogChildProperties,
  alertDialogChildPropertiesMapping,
  alertDialogInteractions,
  alertDialogInteractionsMapping,
  alertDialogStyle,
  alertDialogRules,
} from './properties';
import { Component, liquidRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPAlertDialog')
    component.loadVariants(alertDialogVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Alert Dialog')
    component.getProperties(alertDialogProperties());
    component.getPropertiesMapping(alertDialogPropertiesMapping());
    component.getChildProperties(alertDialogChildProperties());
    component.getChildPropertiesMapping(alertDialogChildPropertiesMapping());
    component.getInteractions(alertDialogInteractions());
    component.getInteractionsMapping(alertDialogInteractionsMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: ALERT_DIALOG }))
    component.getStyle(alertDialogStyle())
    component.getRules(alertDialogRules())
    component.loadStates([
    ]);

    component.setRenderer(liquidRenderer);
  },
};

const ALERT_DIALOG = 'alertDialog'

export { ALERT_DIALOG };