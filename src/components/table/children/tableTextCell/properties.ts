import { commonProperties, commonPropertiesMapping, dataCommonProperties } from '../../../default/properties';
import { cellProperties, cellPropertiesMapping } from '../tableColumns/properties';

export function tableTextCellProperties() {
  return {
    ...cellProperties('Text Column'),
    ...dataCommonProperties(),
    variant: {type: 'string', required: true, enum: ['default'], default: 'default'},
    ...commonProperties(),
  };
}

export function tableTextCellPropertiesMapping() {
  return {
    ...cellPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableTextCellChildProperties() {
  return {

  };
}

export function tableTextCellChildPropertiesMapping() {
  return {

  };
}


export function tableTextCellVariants() {
  return {
    default: ''
  };
}
