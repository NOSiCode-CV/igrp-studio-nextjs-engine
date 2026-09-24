import {
  baseData,
  baseInteraction,
  baseRules,
  baseStyle, classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function tableProperties() {
  return {
    data: { type: 'string', required: false },
    showFilter: { type: 'boolean', required: false, default: false },
    showPagination: { type: 'boolean', required: false, default: false },
    showToggleColumn: { type: 'boolean', required: false, default: false },
    isNumericPagination: { type: 'boolean', required: false, default: false },
    isServerSide: { type: 'boolean', required: false, default: false },
    pageSizePagination: { type: 'array', items: { type: 'number' }, 'x-ui-widget': 'chips', required: false },
    toggleLabel: { type: 'string', required: false },
    toggleOptionsLabel: { type: 'string', required: false },
    /** DS beta.140+ — label for the "Clear filters" button in client-filter mode. */
    clientClearLabel: { type: 'string', required: false },
    /** DS beta.140+ — message rendered inside the table when no rows match. */
    notFoundLabel: { type: 'string', required: false },
    tableClassName: { type: 'string', required: false },
    tableHeaderClassName: { type: 'string', required: false },
    tableBodyClassName: { type: 'string', required: false },
    paginationClassName: { type: 'string', required: false },
    /** DS beta.141+ — CSS classes applied to the filter wrapper. */
    filterClassName: { type: 'string', required: false },
    rowCount: { type: 'number', required: false },
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

function baseFnVisibility(): InteractionFieldVisibility {
  return {
    fnName: { visible: true },
    actionName: { visible: false },
    fnCustomSet: { visible: true },
    fnCustomCode: {
      imports: { visible: false },
      states: { visible: false },
      fnCode: { visible: false },
      actionCode: { visible: false },
    },
  };
}

export function tableInteractions() {
  return {
    onFiltersCleared: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_FILTERS_CLEARED, undefined, baseFnVisibility()), required: false },
    onQueryChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.ON_QUERY_CHANGE, undefined, baseFnVisibility()), required: false },
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
