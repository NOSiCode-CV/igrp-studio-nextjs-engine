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
    component.loadParent(TABLE)
    component.loadGroup('Columns')
    component.loadLabel('Table Filter')
    component.getProperties(tableFiltersProperties());
    component.getPropertiesMapping(tableFiltersPropertiesMapping());
    component.getChildProperties(tableFiltersChildProperties());
    component.getChildPropertiesMapping(tableFiltersChildPropertiesMapping());

    component.loadStates([]);

    component.loadChildrenTypes([
      { name: TABLE_DATE_FILTER, isDefault: false },
      { name: TABLE_DROPDOWN_FILTER, isDefault: false },
      { name: TABLE_FACETED_FILTER, isDefault: false },
      { name: TABLE_INPUT_FILTER, isDefault: false },
      { name: TABLE_MINMAX_FILTER, isDefault: false },
      { name: TABLE_SELECT_FILTER, isDefault: false },
    ]);

    component.loadAcceptedChildren([
      ...component.childrenTypes
    ])

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_FILTERS = 'tableFilters'

export { TABLE_FILTERS };