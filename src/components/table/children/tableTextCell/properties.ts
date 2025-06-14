import { commonProperties, commonPropertiesMapping, dataCommonProperties } from '../../../default/properties';
import { cellProperties, cellPropertiesMapping } from '../tableColumns/properties';

export function tableTextCellProperties() {
  return {
    ...cellProperties('Text Column'),
    ...dataCommonProperties(),
    variant: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
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
