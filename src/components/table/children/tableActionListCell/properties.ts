import { classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { cellProperties, cellPropertiesMapping } from '../tableColumns/properties';

export function tableActionListCellProperties() {
  return {
    ...cellProperties('Actions Column'),
    type: { type: 'string', required: false, enum: [ 'dropdown', 'inline' ], default: 'inline' },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function tableActionListCellPropertiesMapping() {
  return {
    ...cellPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableActionListCellChildProperties() {
  return {

  };
}

export function tableActionListCellChildPropertiesMapping() {
  return {

  };
}


export function tableActionListCellVariants() {
  return {
    default: ''
  };
}
