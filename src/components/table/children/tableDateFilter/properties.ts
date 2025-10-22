import { commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function tableDateFilterProperties() {
  return {
    columnId: { type: 'string', required: true, default: '{{id}}' },
    clearDates: { type: 'boolean', required: false, default: true },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function tableDateFilterPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function tableDateFilterChildProperties() {
  return {

  };
}

export function tableDateFilterChildPropertiesMapping() {
  return {

  };
}


export function tableDateFilterVariants() {
  return {
    default: ''
  };
}
