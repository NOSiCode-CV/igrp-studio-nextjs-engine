import { baseData, classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../../../utils/constants';

export function tableDropdownFilterProperties() {
  return {
    columnId: { type: 'string', required: true, default: '{{id}}' },
    placeholder: { type: 'string', required: false, default: 'Filtar...' },
    showFilter: { type: 'boolean', required: false, default: true },
    notFoundText: { type: 'string', required: false, default: 'No options found' },
    ...classProperties(),
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

export function tableDropdownFilterData() {
  return {
    options: { ...baseData(INTERACTIONS_DEFAULTS.EMPTY_ARRAY, INTERACTIONS_TYPES.OPTIONS, {
        id: '',
        name: 'dropdownFilter{{id}}Options',
        type: 'IGRPOptionsProps[]',
        defaultValue: '[]'
      }, true), required: true },
  };
}

export function tableDropdownFilterVariants() {
  return {
    default: ''
  };
}
