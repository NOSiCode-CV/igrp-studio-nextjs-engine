import { commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function tableBadgeCellProperties() {
  return {
    field: { type: 'string', required: true },
    label: { type: 'string', required: true },
    variant: { type: 'string', required: false, default: 'default', enum: ['default'] },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function tableBadgeCellPropertiesMapping() {
  return {
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
