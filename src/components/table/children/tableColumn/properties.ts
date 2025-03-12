import { commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function tableColumnProperties() {
  return {
    headerType: { type: 'string', required: false, enum: [ 'sortToggle', 'sortDropdown' ] },
    headerTitle: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function tableColumnPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function tableColumnChildProperties() {
  return {

  };
}

export function tableColumnChildPropertiesMapping() {
  return {

  };
}


export function tableColumnVariants() {
  return {
  };
}
