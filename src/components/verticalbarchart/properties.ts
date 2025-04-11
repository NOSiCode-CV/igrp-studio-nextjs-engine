import { baseInteraction, commonProperties, commonPropertiesMapping } from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function verticalBarChartProperties() {
  return {
    data: {
      type: 'array',
      required: true,
      items: {
        type: 'object',
        properties: {}
      },
    },
    bars: {
      type: 'array',
      required: true,
      items: {
        type: 'object',
        properties: {
          radius: { type: 'number', required: false }
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
    barRadius: { type: 'number', required: false, default: 5 },
    barGap: { type: 'number', required: false, default: 8 },
    barCategoryGap: { type: 'string', required: false, default: "30%" },
    showReferenceZero: { type: 'boolean', required: false },
    size: { type: 'string', required: false, enum: ["sm", "md", "lg", "xl", "auto"], default: "auto" },
    legendPosition: { type: 'string', required: false, enum: ["top", "right", "bottom", "left", "none"], default: "bottom" },
    tooltipIndicator: { type: 'string', required: false, enum: ["line", "dot",], default: "line" },
    footer: {
      type: 'object',
      required: false,
      default: "line",
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
    referenceLineColor: { type: 'string', required: false },
    axisColor: { type: 'string', required: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  }
}

export function verticalBarChartPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function verticalBarChartChildProperties() {
  return {

  };
}

export function verticalBarChartChildPropertiesMapping() {
  return {
    data: 'data',
    xAxisKey: 'xAxisKey',
    series: 'series',
    height: 'height'
  };
}

export function verticalBarChartInteractions() {
  return {
    labelFormatter: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.LABEL_FORMATTER), required: false },
    valueFormatter: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_VALUE, INTERACTIONS_TYPES.VALUE_FORMATTER), required: false },
    data: { ...baseInteraction(INTERACTIONS_DEFAULTS.NULLABLE, INTERACTIONS_TYPES.DATA), required: true },
  };
}