import { baseRules, baseStyle, commonProperties, commonPropertiesMapping } from '../default/properties';

export function headlineProperties() {
  return {
    title: { type: 'string', required: true, default: 'Page Title' },
    description: { type: 'string', required: false, default: 'Page Description' },
    variant: { type: 'string', required: false, enum: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], default: 'h3' },
    className: { type: 'string', required: false },
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