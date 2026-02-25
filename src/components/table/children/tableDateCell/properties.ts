import {
  classProperties,
  commonProperties,
  commonPropertiesMapping,
  dataCommonProperties,
} from '../../../default/properties';
import { cellProperties, cellPropertiesMapping } from '../tableColumns/properties';

export function tableDateCellProperties() {
  return {
    ...cellProperties('Date Column'),
    ...dataCommonProperties(),
    date: {type: 'string', required: true, default: '01/01/2025'},
    dateFormat: {type: 'string', required: false, default: 'dd/MM/yyyy', enum: ['dd/MM/yyyy', 'dd-MM-YYYY', 'yyyy/MM/dd', 'yyyy-MM-dd']},
    ...classProperties(),
    ...commonProperties(),
  };
}

export function tableDateCellPropertiesMapping() {
  return {
    ...cellPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableDateCellChildProperties() {
  return {

  };
}

export function tableDateCellChildPropertiesMapping() {
  return {

  };
}


export function tableDateCellVariants() {
  return {
    default: ''
  };
}
