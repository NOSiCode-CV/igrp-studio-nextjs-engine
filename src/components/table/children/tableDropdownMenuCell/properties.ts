import { commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { cellProperties, cellPropertiesMapping } from '@/components/table/children/tableColumns/properties';

export function tableDropdownMenuCellProperties() {
  return {
    ...cellProperties('Actions Column'),
    ...commonProperties(),
  };
}

export function tableDropdownMenuCellPropertiesMapping() {
  return {
    ...cellPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableDropdownMenuCellChildProperties() {
  return {

  };
}

export function tableDropdownMenuCellChildPropertiesMapping() {
  return {

  };
}


export function tableDropdownMenuCellVariants() {
  return {
    default: ''
  };
}
