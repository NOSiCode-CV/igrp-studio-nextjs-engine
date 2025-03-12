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

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDataTable } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(tableVariants());
    component.loadIcon('Table')
    component.loadGroup('dataDisplay')
    component.loadLabel('Table')
    component.getProperties(tableProperties());
    component.getPropertiesMapping(tablePropertiesMapping());
    component.getChildProperties(tableChildProperties());
    component.getChildPropertiesMapping(tableChildPropertiesMapping());

    component.loadChildrenTypes([
      TABLE_COLUMNS, TABLE_FILTERS, TABLE_EXPANDER_CELL, TABLE_TEXT_CELL, TABLE_AMOUNT_CELL
    ]);

    component.loadAcceptedChildren([TABLE_EXPANDER_CELL, TABLE_TEXT_CELL, TABLE_AMOUNT_CELL])

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