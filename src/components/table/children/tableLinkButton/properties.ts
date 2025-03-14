import { commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { buttonProperties, buttonPropertiesMapping } from '../tableColumns/properties';

export function tableLinkButtonProperties() {
  return {
    ...buttonProperties('Link'),
    href: { type: 'string', required: false, default: 'https://www.igrp.cv/' },
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
