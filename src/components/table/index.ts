import {
  tablePropertiesMapping,
  tableProperties,
  tableVariants,
  tableChildProperties,
  tableChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { TABLE_COLUMNS } from './children/tableColumns';
import { TABLE_FILTERS } from './children/tableFilters';
import { TABLE_EXPANDER_CELL } from './children/tableExpanderCell';
import { TABLE_TEXT_CELL } from './children/tableTextCell';
import { TABLE_AMOUNT_CELL } from './children/tableAmountCell';
import { TABLE_DATE_CELL } from './children/tableDateCell';
import { TABLE_DATE_FILTER } from './children/tableDateFilter';
import { TABLE_DROPDOWN_FILTER } from './children/tableDropdownFilter';
import { TABLE_FACETED_FILTER } from './children/tableFacetedFilter';
import { TABLE_INPUT_FILTER } from './children/tableInputFilter';
import { TABLE_MINMAX_FILTER } from './children/tableMixMaxFilter';
import { TABLE_SELECT_FILTER } from './children/tableSelectFilter';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDataTable } from "@igrp/igrp-framework-react-design-system";',
      'import { facetedFilterFn, dateRangeFilterFn } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(tableVariants());
    component.loadChildrenMax(2)
    component.loadIcon('Table')
    component.loadGroup('dataDisplay')
    component.loadLabel('Table')
    component.getProperties(tableProperties());
    component.getPropertiesMapping(tablePropertiesMapping());
    component.getChildProperties(tableChildProperties());
    component.getChildPropertiesMapping(tableChildPropertiesMapping());

    component.loadChildrenTypes([
      TABLE_COLUMNS, TABLE_FILTERS
    ]);

    component.loadAcceptedChildren([
      TABLE_COLUMNS, TABLE_FILTERS
    ])

    component.loadStates([
      'const [contentTable{{id}}, setContentTable{{id}}] = useState([]);'
    ]);

    component.loadServiceMethods([
      '{{id}}: { populate: () => Promise<{ rows: any[] }>; };',
    ]);

    component.loadCodeBlock(
  `
  useEffect(() => {
    updateTable{{id}}()
  },[])

  const updateTable{{id}} = async () => {
    if (service.{{id}} && service.{{id}}.populate) {
      const data = (await service.{{id}}.populate()).rows
      setContentTable{{id}}([...data])
    }
  }
  `
    )

    component.setRenderer(hbsRenderer);
  },
};

const TABLE = 'table'

export { TABLE };