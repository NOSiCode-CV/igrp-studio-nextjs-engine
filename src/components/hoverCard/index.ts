import {
  hoverCardProperties,
  hoverCardPropertiesMapping,
  hoverCardVariants,
  hoverCardChildProperties,
  hoverCardChildPropertiesMapping,
  hoverCardStyle,
  hoverCardRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('HoverCard');
    component.loadVariants(hoverCardVariants());
    component.loadGroup('feedback');
    component.loadLabel('Hover Card');
    component.getProperties(hoverCardProperties());
    component.getPropertiesMapping(hoverCardPropertiesMapping());
    component.getChildProperties(hoverCardChildProperties());
    component.getChildPropertiesMapping(hoverCardChildPropertiesMapping());
    component.getStyle(hoverCardStyle());
    component.getRules(hoverCardRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const HOVER_CARD = 'hoverCard';
export { HOVER_CARD };
