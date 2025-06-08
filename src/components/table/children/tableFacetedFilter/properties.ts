import { baseData, commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../../../utils/constants';

export function tableFacetedFilterProperties() {
  return {
    columnId: { type: 'string', required: true, default: '{{id}}' },
    placeholder: { type: 'string', required: false, default: 'Selecionar...' },
    badgeClassName: { type: 'string', required: false },
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

export function tableFacetedFilterData() {
  return {
    options: { ...baseData(INTERACTIONS_DEFAULTS.EMPTY_ARRAY, INTERACTIONS_TYPES.OPTIONS, {
        id: '',
        name: 'facetedFilter{{id}}Options',
        type: 'IGRPOptionsProps[]',
        defaultValue: '[]'
      }, true), required: true },
  };
}

export function tableFacetedFilterVariants() {
  return {
    default: ''
  };
}
