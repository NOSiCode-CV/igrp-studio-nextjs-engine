import {
  baseData,
  baseInteraction,
  baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function radarChartProperties() {
  return {
    data: {
      type: 'array',
      required: true,
      items: {
        type: 'object',
        properties: {}
      },
    },
    radars: {
      type: 'array',
      required: true,
      items: {
        type: 'object',
        properties: {
          dataKey: { type: 'string', required: true, default: 'data' },
          fill: { type: 'string', required: false },
          fillOpacity: { type: 'number', required: false },
          strokeWidth: { type: 'number', required: false },
          dot: { type: 'boolean', required: false },
          activeDot: { type: 'boolean', required: false },
          isAnimationActive: { type: 'boolean', required: false },
        }
      },
    },
    categoryKey: { type: 'string', required: true, default: "value" },
    angleAxisKey: { type: 'string', required: true },
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
    tooltipIndicator: { type: 'string', required: false, enum: ["radar", "dot",], default: "radar" },
    footer: {
      type: 'object',
      required: false,
      default: "radar",
      properties: {
        description: {
          type: 'string',
          required: true,
          default: "Chart Data"
        }
      }
    },
    gridColor: { type: 'string', required: false },
    backgroundColor: { type: 'string', required: false },
    axisColor: { type: 'string', required: false },
    polarGridType: { type: 'string', required: false, enum: ['polygon', 'circle'] },
    polarGridLineType: { type: 'string', required: false, enum: ['solid', 'dashed', 'dotted'] },
    showPolarGrid: { type: 'boolean', required: false },
    showRadiusAxis: { type: 'boolean', required: false },
    radiusAxisDomain: { type: 'array', required: true, items: { type: 'object' } },
    radiusAxisAngle: { type: 'number', required: false },
    customAngleAsisTick: { type: 'object', required: false },
    showGridLines: { type: 'boolean', required: false },
    showRadiusLines: { type: 'boolean', required: false },
    gridFilled: { type: 'boolean', required: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  }
}

export function radarChartPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function radarChartChildProperties() {
  return {

  };
}

export function radarChartChildPropertiesMapping() {
  return {
    data: 'data',
    xAxisKey: 'xAxisKey',
    series: 'series',
    height: 'height'
  };
}

export function radarChartInteractions() {
  return {
    labelFormatter: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_STRING_VALUE, INTERACTIONS_TYPES.LABEL_FORMATTER), required: false },
    valueFormatter: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_STRING_VALUE, INTERACTIONS_TYPES.VALUE_FORMATTER), required: false },
  };
}

export function radarChartData() {
  return {
    data: { ...baseData(undefined, INTERACTIONS_TYPES.DATA,
        {
          id: '',
          name: 'contentChart{{id}}',
          type: '{{type}}[]',
          defaultValue: '[]',
        }, true
      ), required: true },
  };
}

export function radarChartStyle() {
  return {
    ...baseStyle()
  }
}

export function radarChartRules() {
  return {
    ...baseRules()
  }
}
