import {
  baseData,
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function textProperties() {
  return {
    content: { type: 'string', required: true, default: 'Lorem ipsum dolor sit amet' },
    variant: { type: 'string', required: true, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    weight: { type: 'string', required: false, default: 'normal', enum: ['light', 'normal', 'medium', 'semibold', 'bold'] },
    size: { type: 'string', required: false, default: 'default', enum: ['sm', 'default', 'lg', 'xl'] },
    align: { type: 'string', required: false, default: 'left', enum: ['left', 'center', 'right', 'justify'] },
    spacing: { type: 'string', required: false, default: 'normal', enum: ['tight', 'normal', 'loose', 'none'] },
    animate: { type: 'boolean', default: false, required: false},
    truncate: { type: 'boolean', default: false, required: false},
    maxLines: { type: 'number', default: 3, required: false },
    highlight: { type: 'array', items: { type: 'string' }, 'x-ui-widget': 'chips', required: false },
    as: { type: 'string', required: false, enum: ['p', 'span', 'div'] },
    name: { type: 'string', required: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function textPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function textChildProperties() {
  return {};
}

export function textChildPropertiesMapping() {
  return {};
}

export function textVariants() {
  return {};
}

export function textStyle() {
  return {
    ...baseStyle()
  }
}

export function textRules() {
  return {
    ...baseRules()
  }
}

export function textData() {
  return {
    highlight: {
      ...baseData(INTERACTIONS_DEFAULTS.EMPTY_ARRAY, INTERACTIONS_TYPES.HIGHLIGHT, {
        id: '',
        name: 'highlight{{id}}Text',
        type: 'string[]',
        defaultValue: '[]'
      }), required: false
    }
  }
}