import {
  tableFiltersPropertiesMapping,
  tableFiltersProperties,
  tableFiltersVariants,
  tableFiltersChildProperties,
  tableFiltersChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { TABLE } from '../../index';
import { TABLE_DATE_FILTER } from '../tableDateFilter';
import { TABLE_DROPDOWN_FILTER } from '../tableDropdownFilter';
import { TABLE_FACETED_FILTER } from '../tableFacetedFilter';
import { TABLE_INPUT_FILTER } from '../tableInputFilter';
import { TABLE_MINMAX_FILTER } from '../tableMixMaxFilter';
import { TABLE_SELECT_FILTER } from '../tableSelectFilter';

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

    component.loadChildrenTypes([
      TABLE_DATE_FILTER, TABLE_DROPDOWN_FILTER,
      TABLE_FACETED_FILTER, TABLE_INPUT_FILTER, TABLE_MINMAX_FILTER, TABLE_SELECT_FILTER
    ])

    component.loadAcceptedChildren([
      TABLE_DATE_FILTER, TABLE_DROPDOWN_FILTER,
      TABLE_FACETED_FILTER, TABLE_INPUT_FILTER, TABLE_MINMAX_FILTER, TABLE_SELECT_FILTER
    ])

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_FILTERS = 'tableFilters'

export { TABLE_FILTERS };