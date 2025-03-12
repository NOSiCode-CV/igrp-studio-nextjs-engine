import { commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function tableSelectFilterProperties() {
  return {
    placeholder: { type: 'string', required: false },
    options: { type: 'array', items: { value: { type: 'string', required: true }, label: { type: 'string', required: true },
        color: { type: 'string', required: false } }, required: true }, // Array of objects with value and label
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function tableSelectFilterPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function tableSelectFilterChildProperties() {
  return {

  };
}

export function tableSelectFilterChildPropertiesMapping() {
  return {

  };
}


export function tableSelectFilterVariants() {
  return {
    default: ''
  };
}
