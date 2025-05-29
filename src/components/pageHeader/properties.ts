import { baseRules, baseStyle, commonProperties, commonPropertiesMapping } from '../default/properties';

export function pageHeaderProperties() {
  return {
    title: { type: 'string', required: true, default: 'Page Title' },
    description: { type: 'string', required: false, default: 'Page Description' },
    variant: { type: 'string', required: false, enum: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], default: 'h3' },
    className: { type: 'string', required: false },
    headlineClassName: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function pageHeaderPropertiesMapping() {
  return {
    title: { property: 'title' },
    description: { property: 'description' },
    ...commonPropertiesMapping(),
  };
}

export function pageHeaderChildProperties() {
  return {

  };
}

export function pageHeaderChildPropertiesMapping() {
  return {

  };
}


export function pageHeaderVariants() {
  return {
    default: ''
  };
}

export function pageHeaderStyle() {
  return {
    ...baseStyle()
  }
}

export function pageHeaderRules() {
  return {
    ...baseRules()
  }
}
