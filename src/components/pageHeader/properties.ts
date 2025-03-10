import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function pageHeaderProperties() {
  return {
    title: { type: 'string', required: true, default: 'Page Title' },
    description: { type: 'string', required: false, default: 'Page Description' },
    variant: {type: 'string', required: true, enum: ['default'], default: 'default'},
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
