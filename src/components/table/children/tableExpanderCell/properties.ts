import { classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { cellProperties, cellPropertiesMapping } from '../tableColumns/properties';

export function tableExpanderCellProperties() {
  return {
    ...cellProperties('Expander Column'),
    field: {type: 'string', required: false},
    label: {type: 'string', required: false},
    icons: {type: 'array', required: false, items: { type: 'string', required: true, enum: ['ChevronDown', 'ChevronUp'] }},
    variant: {type: 'string', required: true, enum: ['default'], default: 'default'},
    ...classProperties(),
    ...commonProperties(),
  };
}

export function tableExpanderCellPropertiesMapping() {
  return {
    ...cellPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableExpanderCellChildProperties() {
  return {

  };
}

export function tableExpanderCellChildPropertiesMapping() {
  return {

  };
}


export function tableExpanderCellVariants() {
  return {
    default: ''
  };
}
