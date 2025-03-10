import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function chartProperties() {
  return {
    data: { type: 'array', required: true, items: 'object' },
    xAxisKey: { type: 'string', required: true },
    series: { type: 'array', required: true, items: { key: 'string', color: 'string' } },
    ...commonProperties(),
  };
}

export function chartPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function chartChildProperties() {
  return {
    data: { type: 'array', required: true, items: 'object' },
    xAxisKey: { type: 'string', required: true },
    series: { type: 'array', required: true, items: { key: 'string', color: 'string' } },
    height: { type: 'number', required: false }
  };
}

export function chartChildPropertiesMapping() {
  return {
    data: 'data',
    xAxisKey: 'xAxisKey',
    series: 'series',
    height: 'height'
  };
}

export function chartVariants() {
  return {
    line: "line",
    bar: "bar",
    area: "area",
    pie: "pie"
  };
}
