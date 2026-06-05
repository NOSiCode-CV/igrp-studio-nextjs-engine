import { classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function tableMinMaxFilterProperties() {
  return {
    columnId: { type: 'string', required: true, default: '{{id}}' },
    placeholder: { type: 'string', required: false, default: 'Min' },
    ...classProperties(),
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
