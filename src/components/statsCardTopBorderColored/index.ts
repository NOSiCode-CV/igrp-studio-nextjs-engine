import {
  statsCardTopBorderColoredProperties,
  statsCardTopBorderColoredPropertiesMapping,
  statsCardTopBorderColoredVariants,
  statsCardTopBorderColoredChildProperties,
  statsCardTopBorderColoredChildPropertiesMapping,
  statsCardTopBorderColoredStyle,
  statsCardTopBorderColoredRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPStatsCardTopBorderColored');
    component.loadVariants(statsCardTopBorderColoredVariants());
    component.loadGroup('dataDisplay');
    component.loadLabel('Stats Card (Top Border)');
    component.getProperties(statsCardTopBorderColoredProperties());
    component.getPropertiesMapping(statsCardTopBorderColoredPropertiesMapping());
    component.getChildProperties(statsCardTopBorderColoredChildProperties());
    component.getChildPropertiesMapping(statsCardTopBorderColoredChildPropertiesMapping());
    component.getStyle(statsCardTopBorderColoredStyle());
    component.getRules(statsCardTopBorderColoredRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const STATS_CARD_TOP_BORDER_COLORED = 'statsCardTopBorderColored';
export { STATS_CARD_TOP_BORDER_COLORED };
