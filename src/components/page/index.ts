import {
  pagePropertiesMapping,
  pageProperties,
  pageVariants,
  pageChildProperties, pageChildPropertiesMapping, pageInteractions, pageStyle, pageRules,
} from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadVariants(pageVariants())
    component.loadGroup('structure')
    component.loadLabel('Page Content')
    component.getProperties(pageProperties());
    component.getPropertiesMapping(pagePropertiesMapping());
    component.getChildProperties(pageChildProperties());
    component.getChildPropertiesMapping(pageChildPropertiesMapping());
    component.getInteractions(pageInteractions());
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
    component.getStyle(pageStyle());
    component.getRules(pageRules());
  },
};

const PAGE = 'page'

export { PAGE };