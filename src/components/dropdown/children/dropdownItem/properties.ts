import {
  baseInteraction, baseRules, baseStyle, classProperties,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
} from '../../../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../../../utils/constants';

export function dropdownItemProperties() {
  return {
    label: { type: 'string', required: true, default: 'DropdownItem' },
    variant: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    size: { type: 'string', required: false, default: 'icon', enum: ['default', 'sm', 'lg', 'icon'] },
    ...iconProperties(),
    disabled: { type: 'boolean', required: false, default: false },
    ...classProperties(),
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

export function dropdownItemInteractions() {
  return {
    action: {
      ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ACTION), required: true
    },
    onClickConfirm: {
      ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ACTION), required: true
    },
  }
}

export function dropdownItemInteractionsMapping() {
  return {}
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

export function dropdownItemStyle() {
  return {
    ...baseStyle()
  }
}

export function dropdownItemRules() {
  return {
    ...baseRules()
  }
}