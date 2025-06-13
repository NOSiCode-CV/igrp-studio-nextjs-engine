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
import { TEXT } from '../text/index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

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
    component.loadDefaultChildren([{name: TEXT}])
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: ALERT }))
    component.getStyle(alertStyle())
    component.getRules(alertRules())
    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const ALERT = 'alert'

export { ALERT };