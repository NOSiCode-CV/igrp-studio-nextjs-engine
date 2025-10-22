import { commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function tableInputFilterProperties() {
  return {
    columnId: { type: 'string', required: true, default: '{{id}}' },
    placeholder: { type: 'string', required: false, default: 'Search...' },
    iconProperties: {
      type: 'object',
      required: false,
      properties: {
        iconName: { type: 'string', required: false, default: 'Search' },
      }
    },
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
