import {
  paginationProperties,
  paginationPropertiesMapping,
  paginationVariants,
  paginationChildProperties,
  paginationChildPropertiesMapping,
  paginationStyle,
  paginationRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('Pagination');
    component.loadVariants(paginationVariants());
    component.loadGroup('navigation');
    component.loadLabel('Pagination');
    component.getProperties(paginationProperties());
    component.getPropertiesMapping(paginationPropertiesMapping());
    component.getChildProperties(paginationChildProperties());
    component.getChildPropertiesMapping(paginationChildPropertiesMapping());
    component.getStyle(paginationStyle());
    component.getRules(paginationRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const PAGINATION = 'pagination';
export { PAGINATION };
