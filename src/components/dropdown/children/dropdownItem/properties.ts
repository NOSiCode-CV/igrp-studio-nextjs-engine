import { commonProperties, commonPropertiesMapping, iconProperties } from '../../../default/properties';

export function dropdownItemProperties() {
  return {
    label: { type: 'string', required: true, default: 'DropdownItem' },
    variant: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    size: { type: 'string', required: false, default: 'icon', enum: ['default', 'sm', 'lg', 'icon'] },
    ...iconProperties(),
    disabled: { type: 'boolean', required: false, default: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function dropdownItemPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function dropdownItemChildProperties() {
  return {};
}

export function dropdownItemChildPropertiesMapping() {
  return {};
}

export function dropdownItemVariants() {
  return {
    default: "default",
    secondary: "secondary",
    destructive: "destructive",
    outline: "outline",
    ghost: "ghost",
    link: "link",
  };
}
