import { baseInteraction, commonProperties, commonPropertiesMapping, iconProperties } from '../default/properties';

export function buttonProperties() {
  return {
    label: { type: 'string', required: true, default: 'Button' },
    variant: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    size: { type: 'string', required: false, default: 'default', enum: ['default', 'sm', 'lg', 'icon'] },
    ...iconProperties(),
    disabled: { type: 'boolean', required: false, default: false },
    className: { type: 'string', required: false },
    action: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function buttonPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function buttonChildProperties() {
  return {};
}

export function buttonChildPropertiesMapping() {
  return {};
}

export function buttonVariants() {
  return {
    default: "default",
    secondary: "secondary",
    destructive: "destructive",
    outline: "outline",
    ghost: "ghost",
    link: "link",
  };
}

export function buttonInteractions() {
  return {
    onClick: { ...baseInteraction, required: true, default: "(e) => handle{{id}}Click(e)" },
  };
}

export function buttonInteractionsMapping() {
  return {

  };
}