import { baseRules, baseStyle, commonProperties, commonPropertiesMapping, iconProperties } from '../default/properties';

export function textListProperties() {
  return {
    type: { type: 'string', required: false, enum: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], default: 'h3' },
    title: { type: 'string', required: true, default: 'Page Title' },
    description: { type: 'string', required: false, default: 'Page Description' },
    variant: { type: 'string', required: false, enum: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], default: 'h3' },
    roleColor: { type: 'string', required: false, default: 'solid', enum: ['solid', 'outline', 'soft'] },
    color: { type: 'string', required: true, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    ...iconProperties(),
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function textListPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function textListChildProperties() {
  return {

  };
}

export function textListChildPropertiesMapping() {
  return {

  };
}


export function textListVariants() {
  return {
    default: ''
  };
}

export function textListStyle() {
  return {
    ...baseStyle()
  }
}

export function textListRules() {
  return {
    ...baseRules()
  }
}