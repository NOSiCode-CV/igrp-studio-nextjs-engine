import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function cardProperties() {
  return {
    className: { type: 'string', required: false },
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
