import {
  alertPropertiesMapping,
  alertProperties,
  alertVariants,
  alertChildProperties,
  alertChildPropertiesMapping,
  alertInteractions,
  alertInteractionsMapping,
  alertStyle,
  alertRules,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { TABLE_TEXT_CELL } from '../table/children/tableTextCell';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPAlert } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadComponentClass('IGRPAlert')
    component.loadVariants(alertVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Alert')
    component.getProperties(alertProperties());
    component.getPropertiesMapping(alertPropertiesMapping());
    component.getChildProperties(alertChildProperties());
    component.getChildPropertiesMapping(alertChildPropertiesMapping());
    component.getInteractions(alertInteractions());
    component.getInteractionsMapping(alertInteractionsMapping());
    component.getStyle(alertStyle())
    component.getRules(alertRules())
    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const ALERT = 'alert'

export { ALERT };