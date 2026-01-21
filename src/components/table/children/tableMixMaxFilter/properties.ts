import { classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function tableMinMaxFilterProperties() {
  return {
    columnId: { type: 'string', required: true, default: '{{id}}' },
    placeholderMin: { type: 'string', required: false, default: 'Min' },
    placeholderMax: { type: 'string', required: false, default: 'Max' },
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
