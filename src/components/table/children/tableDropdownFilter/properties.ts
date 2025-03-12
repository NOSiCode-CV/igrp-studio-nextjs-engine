import { commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function tableDropdownFilterProperties() {
  return {
    placeholder: { type: 'string', required: false },
    options: { type: 'array', items: { value: { type: 'string', required: true }, label: { type: 'string', required: true },
        color: { type: 'string', required: false } }, required: true }, // Array of objects with value and label
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function tableDropdownFilterPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function tableDropdownFilterChildProperties() {
  return {

  };
}

export function tableDropdownFilterChildPropertiesMapping() {
  return {

  };
}


export function tableDropdownFilterVariants() {
  return {
    default: ''
  };
}
