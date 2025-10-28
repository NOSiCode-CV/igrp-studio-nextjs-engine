import { baseData, classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { cellProperties } from '../tableColumns/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../../../utils/constants';

export function tableSelectFilterProperties() {
  return {
    ...cellProperties(),
    columnId: { type: 'string', required: true, default: '{{id}}' },
    placeholder: { type: 'string', required: false, default: 'Selecionar...' },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function tableSelectFilterPropertiesMapping() {
  return {
    ...cellProperties(),
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

export function tableSelectFilterData() {
  return {
    options: { ...baseData(INTERACTIONS_DEFAULTS.EMPTY_ARRAY, INTERACTIONS_TYPES.OPTIONS, {
        id: '',
        name: 'selectFilter{{id}}Options',
        type: 'IGRPOptionsProps[]',
        defaultValue: '[]'
      }, true), required: true },
  };
}

export function tableSelectFilterVariants() {
  return {
    default: ''
  };
}
