import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function tableProperties() {
  return {
    columns: { type: 'array', required: true, items: { name: { type: 'string', unique: true, required: true, default: 'New Column' } } },
    actions: { type: 'array', required: false, items: { id: { type: 'string', unique: true, required: true },
        variant: { type: 'string', required: true, }, iconName: { type: 'string', required: true } } },
    data: { type: 'array', required: false, items: { type: { type: 'string', required: true, default: 'any' } } },
    ...commonProperties()
  };
}

export function tableChildPropertiesMapping() {
  return {
    columns: 'columns',
    data: 'data',
  };
}

export function tableChildProperties() {
  return {
    columns: { type: 'array', required: true, items: { key: 'string', label: 'string' } },
    data: { type: 'array', required: true, items: 'object' }
  };
}

export function tablePropertiesMapping() {
  return {
    columns: 'columns',
    data: 'data',
    ...commonPropertiesMapping()
  };
}

export function tableVariants() {
  return {
    bordered: "bordered",
    striped: "striped",
    compact: "compact"
  };
}
