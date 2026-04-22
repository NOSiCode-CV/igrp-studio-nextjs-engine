import {
  badgePropertiesMapping,
  badgeProperties,
  badgeVariants,
  badgeChildProperties,
  badgeChildPropertiesMapping, badgeInteractions, badgeInteractionsMapping, badgeStyle, badgeRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPBadge')
    component.loadClassNamePropertyTag('badgeClassName')
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
    component.getStyle(badgeStyle())
    component.getRules(badgeRules())
    component.setRenderer(liquidRenderer);
  },
};

const BADGE = 'badge'

export { BADGE };
