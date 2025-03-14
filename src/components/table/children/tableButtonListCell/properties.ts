import { commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { cellProperties, cellPropertiesMapping } from '@/components/table/children/tableColumns/properties';

export function tableButtonListCellProperties() {
  return {
    ...cellProperties('Actions Column'),
    ...commonProperties(),
  };
}

export function tableButtonListCellPropertiesMapping() {
  return {
    ...cellPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableButtonListCellChildProperties() {
  return {

  };
}

export function tableButtonListCellChildPropertiesMapping() {
  return {

  };
}


export function tableButtonListCellVariants() {
  return {
    default: ''
  };
}
