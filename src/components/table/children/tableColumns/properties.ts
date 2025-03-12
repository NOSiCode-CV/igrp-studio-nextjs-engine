import { commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function tableColumnsProperties() {
  return {
    ...commonProperties(),
  };
}

export function tableColumnsPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function tableColumnsChildProperties() {
  return {};
}

export function cellPropertiesMapping() {
  return {};
}

export function cellProperties() {
  return {
    headerType: { type: 'string', required: false, enum: [ 'sortToggle', 'sortDropdown' ] },
    headerTitle: { type: 'string', required: false, default: 'New Column' },
  };
}

export function tableColumnsChildPropertiesMapping() {
  return {};
}

export function tableColumnsVariants() {
  return {};
}
