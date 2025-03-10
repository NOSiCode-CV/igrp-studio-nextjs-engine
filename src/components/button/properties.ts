import { CommonProperties } from '../../interfaces/types';

export function buttonProperties() {
  return {
    label: { type: 'string', required: true, default: 'Button' },
    variant: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    size: { type: 'string', required: false, default: 'default', enum: ['default', 'sm', 'lg', 'icon'] },
    disabled: { type: 'boolean', required: false, default: false },
    action: { type: 'string', required: false },
  };
}

export function buttonPropertiesMapping() {
  return {
    label: 'label',
    variant: 'variant',
    size: 'size',
    disabled: 'disabled',
    loading: 'loading',
    action: 'onClick',
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
