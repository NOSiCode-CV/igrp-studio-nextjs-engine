import { CommonProperties } from '../../interfaces/types';

export function buttonProperties() {
  return {
    label: { type: 'string', required: true, default: 'Button' },
    variant: { type: 'string', required: false, default: 'default' },
    size: { type: 'string', required: false, default: 'default' },
    disabled: { type: 'boolean', required: false, default: false },
    onClick: { type: 'string', required: false },
  };
}

export function buttonPropertiesMapping() {
  return {
    label: 'label',
    variant: 'variant',
    size: 'size',
    disabled: 'disabled',
    loading: 'loading',
    onClick: 'onClick',
  };
}

export function buttonVariants() {
  return {
    default: "default",
    primary: "primary",
    secondary: "secondary",
    destructive: "destructive",
    outline: "outline",
    ghost: "ghost",
    link: "link",
  };
}
