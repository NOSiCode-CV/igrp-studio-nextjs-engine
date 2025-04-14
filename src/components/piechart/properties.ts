import { baseInteraction, commonProperties, commonPropertiesMapping } from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function pieChartProperties() {
  return {
    data: {
      type: 'array',
      required: true,
      items: {
        type: 'object',
        properties: {}
      },
    },
    pies: {
      type: 'array',
      required: true,
      items: {
        type: 'object',
        properties: {
          dataKey: { type: 'string', required: true, default: 'data' },
          innerRadius: { type: 'number', required: false },
          outerRadius: { type: 'number', required: false },
          paddingAngle: { type: 'number', required: false },
          cornerRadius: { type: 'number', required: false },
          startAngle: { type: 'number', required: false },
          endAngle: { type: 'number', required: false },
          cx: { type: 'string', required: false },
          cy: { type: 'string', required: false },
          showLabels: { type: 'boolean', required: false },
          labelType: { type: 'string', enum: ["value", "name", "percent"], required: false },
          labelPosition: { type: 'string', enum: ["inside", "outside", "insideLeft", "insideRight", "center"], required: false },
          labelLine: { type: 'boolean', required: false },
          activeIndex: { type: 'number', required: false },
          activeShape: { type: 'boolean', required: false },
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
    tooltipIndicator: { type: 'string', required: false, enum: ["pie", "dot",], default: "pie" },
    footer: {
      type: 'object',
      required: false,
      default: "pie",
      properties: {
        description: {
          type: 'string',
          required: true,
          default: "Chart Data"
        }
      }
    },
    valueDomain: { type: 'array', required: true, items: { type: 'object' } },
    gridColor: { type: 'string', required: false },
    backgroundColor: { type: 'string', required: false },
    axisColor: { type: 'string', required: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  }
}

export function pieChartPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function pieChartChildProperties() {
  return {

  };
}

export function pieChartChildPropertiesMapping() {
  return {
    data: 'data',
    xAxisKey: 'xAxisKey',
    series: 'series',
    height: 'height'
  };
}

export function pieChartInteractions() {
  return {
    labelFormatter: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.LABEL_FORMATTER), required: false },
    valueFormatter: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.VALUE_FORMATTER), required: false },
    data: { ...baseInteraction(INTERACTIONS_DEFAULTS.NULLABLE, INTERACTIONS_TYPES.DATA), required: true },
  };
}