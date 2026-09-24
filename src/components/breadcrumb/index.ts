import {
  breadcrumbProperties,
  breadcrumbPropertiesMapping,
  breadcrumbVariants,
  breadcrumbChildProperties,
  breadcrumbChildPropertiesMapping,
  breadcrumbStyle,
  breadcrumbRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('Breadcrumb');
    component.loadVariants(breadcrumbVariants());
    component.loadGroup('navigation');
    component.loadLabel('Breadcrumb');
    component.getProperties(breadcrumbProperties());
    component.getPropertiesMapping(breadcrumbPropertiesMapping());
    component.getChildProperties(breadcrumbChildProperties());
    component.getChildPropertiesMapping(breadcrumbChildPropertiesMapping());
    component.getStyle(breadcrumbStyle());
    component.getRules(breadcrumbRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const BREADCRUMB = 'breadcrumb';
export { BREADCRUMB };
