import {
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
} from '../default/properties';

export function dropdownProperties() {
  return {
    label: { type: 'string', required: true, default: 'Dropdown' },
    variant: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    size: { type: 'string', required: false, default: 'icon', enum: ['default', 'sm', 'lg', 'icon'] },
    ...iconProperties(),
    disabled: { type: 'boolean', required: false, default: false },
    actionItem: { type: 'array', items: { type: 'object', items: { href: { type: 'string', 'x-ui-widget': 'uri' } } }, required: false },
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