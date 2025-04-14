import {
  badgePropertiesMapping,
  badgeProperties,
  badgeVariants,
  badgeChildProperties,
  badgeChildPropertiesMapping, badgeInteractions, badgeInteractionsMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPBadge } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadVariants(badgeVariants());
    component.loadGroup('basicElements')
    component.loadLabel('Badge')
    component.getInteractions(badgeInteractions());
    component.getInteractionsMapping(badgeInteractionsMapping());
    component.getProperties(badgeProperties());
    component.getPropertiesMapping(badgePropertiesMapping());
    component.getChildProperties(badgeChildProperties());
    component.getChildPropertiesMapping(badgeChildPropertiesMapping());

    component.loadStates([
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const BADGE = 'badge'

export { BADGE };
