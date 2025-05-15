import { commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function tableMinMaxFilterProperties() {
  return {
    columnId: { type: 'string', required: true, default: '{{id}}' },
    ...commonProperties(),
  };
}

export function tableMinMaxFilterPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function tableMinMaxFilterChildProperties() {
  return {

  };
}

export function tableMinMaxFilterChildPropertiesMapping() {
  return {

  };
}


export function tableMinMaxFilterVariants() {
  return {
    default: ''
  };
}
