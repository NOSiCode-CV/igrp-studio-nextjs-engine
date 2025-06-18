import { commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { buttonProperties, buttonPropertiesMapping } from '../tableColumns/properties';

export function tableLinkButtonProperties() {
  return {
    ...buttonProperties('Link'),
    href: { type: 'string', required: false, default: 'https://www.igrp.cv/', 'x-ui-widget': 'uri' },
    segments: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string', required: true },
          tag: { type: 'string', required: false },
          value: { type: 'string', required: false }
        },
        required: false
      },
      'x-ui-widget': 'hidden'
    },
    ...commonProperties(),
  };
}

export function tableLinkButtonPropertiesMapping() {
  return {
    ...buttonPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableLinkButtonChildProperties() {
  return {

  };
}

export function tableLinkButtonChildPropertiesMapping() {
  return {

  };
}


export function tableLinkButtonVariants() {
  return {
    default: ''
  };
}
