import { commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { dropdownItemProperties, dropdownItemPropertiesMapping } from '../tableColumns/properties';

export function tableLinkDropdownItemProperties() {
  return {
    ...dropdownItemProperties('Link'),
    type: { type: 'string', required: true, const: 'link' },
    href: { type: 'string', required: false, default: 'https://www.igrp.cv/' },
    ...commonProperties(),
  };
}

export function tableLinkDropdownItemPropertiesMapping() {
  return {
    ...dropdownItemPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableLinkDropdownItemChildProperties() {
  return {

  };
}

export function tableLinkDropdownItemChildPropertiesMapping() {
  return {

  };
}


export function tableLinkDropdownItemVariants() {
  return {
    default: ''
  };
}
