import {
  tableFiltersPropertiesMapping,
  tableFiltersProperties,
  tableFiltersVariants,
  tableFiltersChildProperties,
  tableFiltersChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { TABLE } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
      
    ]);

    component.loadVariants(tableFiltersVariants());
    component.loadIcon('default')
    component.loadParent(TABLE)
    component.loadGroup('Columns')
    component.loadLabel('Table Filter')
    component.getProperties(tableFiltersProperties());
    component.getPropertiesMapping(tableFiltersPropertiesMapping());
    component.getChildProperties(tableFiltersChildProperties());
    component.getChildPropertiesMapping(tableFiltersChildPropertiesMapping());

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_FILTERS = 'tableFilters'

export { TABLE_FILTERS };