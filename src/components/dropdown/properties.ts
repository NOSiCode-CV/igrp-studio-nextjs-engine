import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function dropdownProperties() {
  return {
    label: { type: 'string', required: true, default: 'Dropdown' },
    variant: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    size: { type: 'string', required: false, default: 'default', enum: ['default', 'sm', 'lg', 'icon'] },
    hasIcon: { type: 'boolean', required: false, default: false },
    iconName: { type: 'string', required: false },
    iconPosition: { type: 'string', required: false },
    iconClass: { type: 'string', required: false },
    iconSize: { type: 'number', required: false },
    disabled: { type: 'boolean', required: false, default: false },
    className: { type: 'string', required: false },
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
