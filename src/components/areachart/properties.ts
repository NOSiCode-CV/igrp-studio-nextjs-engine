import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function areaChartProperties() {
  return {
    data: {
      type: 'array',
      required: true,
      items: {
        type: 'object',
        properties: {}
      },
    },
    areas: {
      type: 'array',
      required: true,
      items: {
        type: 'object',
        properties: {
          type: { type: 'string', required: false, enum: [ 'linear', 'monotone', 'step', 'basis', 'natural' ], default: 'linear'},
          fillOpacity: { type: 'number', required: false },
          gradient: { type: 'boolean', required: false },
        }
      },
    },
    categoryKey: { type: 'string', required: true },
    title: { type: 'string', required: false },
    description: { type: 'string', required: false },
    showGrid: { type: 'boolean', required: false },
    showTooltip: { type: 'boolean', required: false },
    hideAxis: { type: 'boolean', required: false },
    hideXAxis: { type: 'boolean', required: false },
    hideYAxis: { type: 'boolean', required: false },
    stacked: { type: 'boolean', required: false },
    expanded: { type: 'boolean', required: false },
    height: { type: 'number', required: false },
    width: { type: 'number', required: false },
    showReferenceZero: { type: 'boolean', required: false },
    size: { type: 'string', required: false, enum: ["sm", "md", "lg", "xl", "auto"], default: "auto" },
    legendPosition: { type: 'string', required: false, enum: ["top", "right", "bottom", "left", "none"], default: "bottom" },
    tooltipIndicator: { type: 'string', required: false, enum: ["line", "dot",], default: "line" },
    footer: { type: 'string', required: false, enum: ["line", "dot",], default: "line" },
    valueDomain: { type: 'array', required: true, items: { type: 'object' } },
    gridColor: { type: 'string', required: false },
    backgroundColor: { type: 'string', required: false },
    referenceLineColor: { type: 'string', required: false },
    axisColor: { type: 'string', required: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  }
}

export function areaChartPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function areaChartChildProperties() {
  return {
    data: { type: 'array', required: true, items: 'object' },
    xAxisKey: { type: 'string', required: true },
    series: { type: 'array', required: true, items: { key: 'string', color: 'string' } },
    height: { type: 'number', required: false }
  };
}

export function areaChartChildPropertiesMapping() {
  return {
    data: 'data',
    xAxisKey: 'xAxisKey',
    series: 'series',
    height: 'height'
  };
}