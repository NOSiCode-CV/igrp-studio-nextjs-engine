import { CommonProperties } from '../../interfaces/types';

export function pageHeaderProperties() {
  return {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false }
  };
}

export function pageHeaderPropertiesMapping() {
  return {
    title: { property: 'title' },
    description: { property: 'description' },
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
  return {};
}
