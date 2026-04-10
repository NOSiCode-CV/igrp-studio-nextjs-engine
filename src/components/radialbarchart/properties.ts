import {
  baseData,
  baseInteraction,
  baseRules,
  baseStyle, classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function radialBarChartProperties() {
  return {
    data: {
      type: 'array',
      required: true,
      items: {
        type: 'object',
        properties: {},
      },
    },
    bars: {
      type: 'array',
      required: true,
      items: {
        type: 'object',
        properties: {
          cornerRadius: { type: 'number', required: false },
          minAngle: { type: 'number', required: false },
          background: { type: 'boolean', required: false },
          clockWise: { type: 'boolean', required: false },
          stackId: { type: 'string', required: false },
          showLabels: { type: 'boolean', required: false },
          labelPosition: {
            type: 'string',
            required: false,
            enum: ['inside', 'outside', 'insideStart', 'insideEnd'],
            default: 'inside',
          },
          labelType: {
            type: 'string',
            required: false,
            enum: ['value', 'name', 'percent'],
            default: 'value',
          },
          labelStyle: {
            type: 'string',
            required: false,
          },
          name: {
            type: 'string',
            required: false,
          },
          color: {
            type: 'string',
            required: false,
          },
        },
      },
    },
    categoryKey: { type: 'string', required: true, default: 'value' },
    nameKey: { type: 'string', required: true, default: 'value' },
    title: { type: 'string', required: false },
    description: { type: 'string', required: false },
    showGrid: { type: 'boolean', required: false },
    showTooltip: { type: 'boolean', required: false },
    showBackground: { type: 'boolean', required: false },
    showRadiusAxis: { type: 'boolean', required: false },
    height: { type: 'number', required: false },
    width: { type: 'number', required: false },
    startAngle: { type: 'number', required: false, default: 0 },
    endAngle: { type: 'number', required: false, default: 360 },
    innerRadius: { type: 'string', required: false, default: '30%' },
    outerRadius: { type: 'string', required: false, default: '100%' },
    barSize: { type: 'number', required: false, default: 8 },
    gridType: { type: 'string', required: false, enum: ['polygon', 'circle'], default: 'circle' },
    size: {
      type: 'string',
      required: false,
      enum: ['sm', 'md', 'lg', 'xl', 'auto'],
      default: 'auto',
    },
    legendPosition: {
      type: 'string',
      required: false,
      enum: ['top', 'right', 'bottom', 'left', 'none'],
      default: 'bottom',
    },
    footer: {
      type: 'object',
      required: false,
      default: 'line',
      properties: {
        description: {
          type: 'string',
          required: true,
          default: 'Chart Data',
        },
      },
    },
    centerText: {
      type: 'object',
      required: false,
      default: 'line',
      properties: {
        show: {
          type: 'boolean',
          required: false,
        },
        value: {
          type: 'string',
          required: false,
        },
        label: {
          type: 'string',
          required: false,
          default: 'Chart Data',
        },
        formatter: {
          type: 'string',
          required: false,
          default: '${value}%',
        },
      },
    },
    gridColor: { type: 'string', required: false },
    backgroundColor: { type: 'string', required: false },
    referenceLineColor: { type: 'string', required: false },
    axisColor: { type: 'string', required: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function radialBarChartPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function radialBarChartChildProperties() {
  return {

  };
}

export function radialBarChartChildPropertiesMapping() {
  return {
    data: 'data',
    xAxisKey: 'xAxisKey',
    series: 'series',
    height: 'height'
  };
}

export function radialBarChartInteractions() {
  return {
    labelFormatter: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_STRING_VALUE, INTERACTIONS_TYPES.LABEL_FORMATTER), required: false },
    valueFormatter: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_STRING_VALUE, INTERACTIONS_TYPES.VALUE_FORMATTER), required: false },
  };
}

export function radialBarChartData() {
  return {
    data: { ...baseData(undefined, INTERACTIONS_TYPES.DATA,
        {
          id: '',
          name: 'contentChart{{id}}',
          type: '{{type}}[]',
          defaultValue: '[]',
        }, true
      ), required: true },
    bars: { ...baseData(undefined, INTERACTIONS_TYPES.BARS,
        {
          id: '',
          name: 'barsChart{{id}}',
          type: 'IGRPBarConfig[]',
          defaultValue: '[]',
        }, true
      ), required: true },
  };
}

export function radialBarChartStyle() {
  return {
    ...baseStyle()
  }
}

export function radialBarChartRules() {
  return {
    ...baseRules()
  }
}
