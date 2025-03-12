import { commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function tableTextCellProperties() {
  return {
    variant: {type: 'string', required: true, enum: ['default'], default: 'default'},
    ...commonProperties(),
  };
}

export function tableTextCellPropertiesMapping() {
  return {
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
