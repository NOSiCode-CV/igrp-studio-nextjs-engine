import { commonProperties, commonPropertiesMapping, dataCommonProperties } from '../../../default/properties';
import { cellProperties, cellPropertiesMapping } from '../tableColumns/properties';

export function tableCheckboxCellProperties() {
  return {
    ...cellProperties('Checkbox Column'),
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function tableCheckboxCellPropertiesMapping() {
  return {
    ...cellPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableCheckboxCellChildProperties() {
  return {

  };
}

export function tableCheckboxCellChildPropertiesMapping() {
  return {

  };
}


export function tableCheckboxCellVariants() {
  return {
    default: ''
  };
}
