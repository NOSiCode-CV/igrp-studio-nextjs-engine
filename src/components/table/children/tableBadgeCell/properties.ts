import { commonProperties, commonPropertiesMapping, dataCommonProperties } from '../../../default/properties';
import { cellProperties, cellPropertiesMapping } from '../tableColumns/properties';

export function tableBadgeCellProperties() {
  return {
    ...cellProperties('Badge Column'),
    ...dataCommonProperties(),
    field: { type: 'string', required: true },
    label: { type: 'string', required: true },
    variant: { type: 'string', required: false, default: 'default', enum: ['default'] },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function tableBadgeCellPropertiesMapping() {
  return {
    ...cellPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableBadgeCellChildProperties() {
  return {

  };
}

export function tableBadgeCellChildPropertiesMapping() {
  return {

  };
}


export function tableBadgeCellVariants() {
  return {
    default: ''
  };
}
