import {
  baseData,
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function dropdownProperties() {
  return {
    label: { type: 'string', required: true, default: 'Dropdown' },
    variant: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    size: { type: 'string', required: false, default: 'icon', enum: ['default', 'sm', 'lg', 'icon'] },
    ...iconProperties(),
    disabled: { type: 'boolean', required: false, default: false },
    actionItem: { type: 'array', items: { type: 'object', items: { href: { type: 'string', 'x-ui-widget': 'uri' } } }, required: false },
    asChild: { type: 'boolean', required: false, default: false },
    align: { type: 'string', required: false, enum: ['start', 'center', 'end'] },
    sideOffset: { type: 'number', required: false },

    ...classProperties(),
    ...commonProperties(),
  };
}

export function dropdownPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function dropdownChildProperties() {
  return {};
}

export function dropdownChildPropertiesMapping() {
  return {};
}

export function dropdownVariants() {
  return {
    default: "default",
    secondary: "secondary",
    destructive: "destructive",
    outline: "outline",
    ghost: "ghost",
    link: "link",
  };
}

export function dropdownData() {
  return {
    actionItem: { ...baseData(INTERACTIONS_DEFAULTS.EMPTY_ARRAY, INTERACTIONS_TYPES.ITEMS, {
        id: '',
        name: 'dropdown{{id}}Items',
        type: 'IGRPOptionsProps[]',
        defaultValue: '[]'
      }, false), required: true },
  }
}

export function dropdownStyle() {
  return {
    ...baseStyle()
  }
}

export function dropdownRules() {
  return {
    ...baseRules()
  }
}