import {
  tablePropertiesMapping,
  tableProperties,
  tableVariants,
  tableChildProperties,
  tableChildPropertiesMapping, tableInteractions, tableInteractionsMapping, tableData, tableStyle, tableRules,
} from './properties';
import { Component, liquidRenderer } from '../index';
import { TABLE_COLUMNS } from './children/tableColumns';
import { TABLE_FILTERS } from './children/tableFilters';
import { TEMPLATES } from '../../utils/constants';
import { replaceTemplate } from '../../utils/helpers';
import { TABLE_ROW_SUBCOMPONENT } from './children/tableRowSubcomponent';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPDataTableFacetedFilterFn , IGRPDataTableDateRangeFilterFn } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadComponentClass('IGRPDataTable')
    component.loadVariants(tableVariants());
    component.loadChildrenMax(3)
    component.loadGroup('dataDisplay')
    component.loadLabel('Table')
    component.setAllowTypes(true)
    component.getProperties(tableProperties());
    component.getPropertiesMapping(tablePropertiesMapping());
    component.getInteractions(tableInteractions());
    component.getInteractionsMapping(tableInteractionsMapping());
    component.getChildProperties(tableChildProperties());
    component.getChildPropertiesMapping(tableChildPropertiesMapping());
    component.getData(tableData());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: TABLE }))

    component.loadChildrenTypes([
      { name: TABLE_COLUMNS, isDefault: true }, { name: TABLE_FILTERS, isDefault: true }, {name: TABLE_ROW_SUBCOMPONENT, isDefault: false}
    ]);

    component.loadAcceptedChildren([
      { name: TABLE_COLUMNS, isDefault: true }, { name: TABLE_FILTERS, isDefault: true }, {name: TABLE_ROW_SUBCOMPONENT, isDefault: false}
    ])

    component.loadStates([
      {
        state: {
          id: '',
          name: 'contentTable{{id}}',
          type: '{{type}}[]',
          defaultValue: '[]',
        },
        required: true,
      },
    ]);

    /*component.loadServiceMethods([
      '{{id}}: { populate: () => Promise<{ rows: any[] }>; };',
    ]);*/

    component.getStyle(tableStyle())
    component.getRules(tableRules())
    component.setRenderer(liquidRenderer);
  },
};

const TABLE = 'table'

export { TABLE };