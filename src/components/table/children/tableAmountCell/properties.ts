import { commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { cellProperties, cellPropertiesMapping } from '../tableColumns/properties';

export function tableAmountCellProperties() {
  return {
    ...cellPropertiesMapping(),
    field: {type: 'string', required: true},
    currency: {type: 'string', required: false, default: 'CVE', enum: ['CVE', 'EUR', 'USD']},
    language: {type: 'string', required: false, default: 'pt-PT', enum: ['pt-PT', 'en-US', 'fr-FR']},
    formatStyle: {type: 'string', required: false, default: 'currency', enum: ['currency', 'decimal', 'percent']},
    icons: {type: 'array', required: false, items: { type: 'string', required: true, enum: ['ChevronDown', 'ChevronUp'] }},
    variant: {type: 'string', required: true, enum: ['default'], default: 'default'},
    ...commonProperties(),
  };
}

export function tableAmountCellPropertiesMapping() {
  return {
    ...cellPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableAmountCellChildProperties() {
  return {

  };
}

export function tableAmountCellChildPropertiesMapping() {
  return {

  };
}


export function tableAmountCellVariants() {
  return {
    default: ''
  };
}
