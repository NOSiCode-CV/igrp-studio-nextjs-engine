import { commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function tableInputFilterProperties() {
  return {
    columnId: { type: 'string', required: true, default: '{{id}}' },
    ...commonProperties(),
  };
}

export function tableInputFilterPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function tableInputFilterChildProperties() {
  return {

  };
}

export function tableInputFilterChildPropertiesMapping() {
  return {

  };
}


export function tableInputFilterVariants() {
  return {
    default: ''
  };
}
