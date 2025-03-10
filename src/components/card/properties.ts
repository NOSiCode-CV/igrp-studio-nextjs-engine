import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function cardProperties() {
  return {
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    title: { type: 'string', required: false },
    subtitle: { type: 'string', required: false },
    body: { type: 'string', required: false },
    footer: { type: 'string', required: false },
    shadow: { type: 'boolean', required: false },
    border: { type: 'boolean', required: false },
    description: { type: 'string', required: false },
    message: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function cardPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function cardChildProperties() {
  return {

  };
}

export function cardChildPropertiesMapping() {
  return {

  };
}


export function cardVariants() {
  return {};
}
