import {
  baseData,
  baseInteraction,
  baseRules,
  baseStyle, classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function tableProperties() {
  return {
    showFilter: { type: 'boolean', required: false, default: false },
    showPagination: { type: 'boolean', required: false, default: false },
    showToggleColumn: { type: 'boolean', required: false, default: false },
    isNumericPagination: { type: 'boolean', required: false, default: false },
    isServerSide: { type: 'boolean', required: false, default: false },
    toggleLabel: { type: 'string', required: false },
    toggleOptionsLabel: { type: 'string', required: false },
    tableClassName: { type: 'string', required: false },
    tableHeaderClassName: { type: 'string', required: false },
    tableBodyClassName: { type: 'string', required: false },
    paginationClassName: { type: 'string', required: false },
    ...classProperties(),
    ...commonProperties()
  };
}

export function tableChildPropertiesMapping() {
  return {
    columns: 'columns',
    data: 'data',
  };
}

export function tableChildProperties() {
  return {
    columns: { type: 'array', required: true, items: { key: 'string', label: 'string' } },
    //data: { type: 'array', required: true, items: 'object' }
  };
}

export function tablePropertiesMapping() {
  return {
    columns: 'columns',
    //data: 'data',
    ...commonPropertiesMapping()
  };
}

export function tableData() {
  return {
    data: { ...baseData(undefined, INTERACTIONS_TYPES.DATA,
        {
          id: '',
          name: 'contentTable{{id}}',
          type: '{{type}}[]',
          defaultValue: '[]',
        }, true
      ), required: true },
  };
}

export function tableInteractionsMapping() {
  return {

  };
}

export function tableVariants() {
  return {
    bordered: "bordered",
    striped: "striped",
    compact: "compact"
  };
}

export function tableStyle() {
  return {
    ...baseStyle()
  }
}

export function tableRules() {
  return {
    ...baseRules()
  }
}
