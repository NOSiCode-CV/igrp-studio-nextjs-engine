import {
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
} from '../default/properties';

export function headlineProperties() {
  return {
    title: { type: 'string', required: true, default: 'Page Title' },
    description: { type: 'string', required: false, default: 'Page Description' },
    variant: { type: 'string', required: false, enum: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], default: 'h3' },
    roleColor: { type: 'string', required: false, default: 'solid', enum: ['solid', 'outline', 'soft'] },
    color: { type: 'string', required: true, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    ...iconProperties(),
    ...classProperties(),
    ...commonProperties(),
  };
}

export function headlinePropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function headlineChildProperties() {
  return {

  };
}

export function headlineChildPropertiesMapping() {
  return {

  };
}


export function headlineVariants() {
  return {
    default: ''
  };
}

export function headlineStyle() {
  return {
    ...baseStyle()
  }
}

export function headlineRules() {
  return {
    ...baseRules()
  }
}