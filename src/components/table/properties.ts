import { CommonProperties } from '../../interfaces/types';

export function tableProperties() {
  return {
    columns: { type: 'array', required: true, items: { key: 'string', label: 'string' } },
    data: { type: 'array', required: true, items: 'object' }
  };
}

export function tablePropertiesMapping() {
  return {
    columns: 'columns',
    data: 'data'
  };
}

export function tableVariants() {
  return {
    bordered: "bordered",
    striped: "striped",
    compact: "compact"
  };
}
