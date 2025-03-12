import { commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { cellProperties, cellPropertiesMapping } from '@/components/table/children/tableColumns/properties';

export function tableBadgeCellProperties() {
  return {
    ...cellProperties(),
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
