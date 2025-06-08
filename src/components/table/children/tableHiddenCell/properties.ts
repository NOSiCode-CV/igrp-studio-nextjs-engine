import { commonProperties, dataCommonProperties, iconProperties } from '../../../default/properties';
import { cellProperties } from '../tableColumns/properties';

export function tableHiddenCellProperties() {
  return {
    ...cellProperties('Hidden Column'),
    value: { type: 'string', required: false, default: '' },
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function tableHiddenCellPropertiesMapping() {
  return {

  };
}

export function tableHiddenCellChildProperties() {
  return {

  };
}

export function tableHiddenCellChildPropertiesMapping() {
  return {

  };
}


export function tableHiddenCellVariants() {
  return {
  };
}
