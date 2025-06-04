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
import { Component, hbsRenderer } from '../index';
import { TABLE_TEXT_CELL } from '../table/children/tableTextCell';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPAlertDialog } from "@igrp/igrp-framework-react-design-system";'
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
    component.getStyle(alertDialogStyle())
    component.getRules(alertDialogRules())
    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const ALERT_DIALOG = 'alertDialog'

export { ALERT_DIALOG };