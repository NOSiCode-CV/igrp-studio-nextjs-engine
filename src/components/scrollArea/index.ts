import {
  scrollAreaProperties,
  scrollAreaPropertiesMapping,
  scrollAreaVariants,
  scrollAreaChildProperties,
  scrollAreaChildPropertiesMapping,
  scrollAreaStyle,
  scrollAreaRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('ScrollArea');
    component.loadVariants(scrollAreaVariants());
    component.loadGroup('layout');
    component.loadLabel('Scroll Area');
    component.getProperties(scrollAreaProperties());
    component.getPropertiesMapping(scrollAreaPropertiesMapping());
    component.getChildProperties(scrollAreaChildProperties());
    component.getChildPropertiesMapping(scrollAreaChildPropertiesMapping());
    component.getStyle(scrollAreaStyle());
    component.getRules(scrollAreaRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const SCROLL_AREA = 'scrollArea';
export { SCROLL_AREA };
