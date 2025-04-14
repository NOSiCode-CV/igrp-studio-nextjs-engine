import {
  tablePropertiesMapping,
  tableProperties,
  tableVariants,
  tableChildProperties,
  tableChildPropertiesMapping, tableInteractions, tableInteractionsMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { TABLE_COLUMNS } from './children/tableColumns';
import { TABLE_FILTERS } from './children/tableFilters';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDataTable } from "@igrp/igrp-framework-react-design-system";',
      'import { IGRPDataTableFacetedFilterFn , IGRPDataTableDateRangeFilterFn } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(tableVariants());
    component.loadChildrenMax(2)
    component.loadGroup('dataDisplay')
    component.loadLabel('Table')
    component.getProperties(tableProperties());
    component.getPropertiesMapping(tablePropertiesMapping());
    component.getInteractions(tableInteractions());
    component.getInteractionsMapping(tableInteractionsMapping());
    component.getChildProperties(tableChildProperties());
    component.getChildPropertiesMapping(tableChildPropertiesMapping());

    component.loadChildrenTypes([
      { name: TABLE_COLUMNS, isDefault: true }, { name: TABLE_FILTERS, isDefault: true }
    ]);

    component.loadAcceptedChildren([
      { name: TABLE_COLUMNS, isDefault: true }, { name: TABLE_FILTERS, isDefault: true }
    ])

    component.loadStates([
      'const [contentTable{{id}}, setContentTable{{id}}] = useState<any>([]);'
    ]);

    component.loadServiceMethods([
      '{{id}}: { populate: () => Promise<{ rows: any[] }>; };',
    ]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE = 'table'

export { TABLE };