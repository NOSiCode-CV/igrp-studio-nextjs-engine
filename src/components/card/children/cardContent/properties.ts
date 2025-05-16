import { commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function cardContentProperties() {
  return {
    className: { type: 'string', required: false },
    spaceX: { type: 'string', required: false, enum: ['1', '2', '3', '4', '5', '6'], default: '3' },
    spaceY: { type: 'string', required: false, enum: ['1', '2', '3', '4', '5', '6'], default: '3' },
    ...commonProperties(),
  };
}

export function cardContentPropertiesMapping() {
  return {
    spaceX: {
      className: 'space-x-'
    },
    spaceY: {
      className: 'space-y-'
    },
    ...commonPropertiesMapping(),
  };
}

export function cardContentChildProperties() {
  return {};
}

export function cardContentChildPropertiesMapping() {
  return {};
}

export function cardContentVariants() {
  return {
  };
}
