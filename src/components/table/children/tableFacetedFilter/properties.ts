import { commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function tableFacetedFilterProperties() {
  return {
    columnId: { type: 'string', required: true, default: '{{id}}' },
    placeholder: { type: 'string', required: false },
    options: { type: 'array', items: { value: { type: 'string', required: true }, label: { type: 'string', required: true },
        color: { type: 'string', required: false } }, required: true }, // Array of objects with value and label
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function tableFacetedFilterPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function tableFacetedFilterChildProperties() {
  return {

  };
}

export function tableFacetedFilterChildPropertiesMapping() {
  return {

  };
}


export function tableFacetedFilterVariants() {
  return {
    default: ''
  };
}
