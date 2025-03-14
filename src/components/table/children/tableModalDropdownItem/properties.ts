import { commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { dropdownItemProperties, dropdownItemPropertiesMapping } from '../tableColumns/properties';

export function tableModalDropdownItemProperties() {
  return {
    ...dropdownItemProperties('Modal'),
    title: { type: 'string', required: false, default: 'New Modal' },
    showCancel: { type: 'boolean', required: false, default: true },
    labelCancel: { type: 'string', required: false, default: 'Cancel' },
    classNameCancel: { type: 'string', required: false },
    variantCancel: { type: 'string', required: false, default: 'default', enum: ['default'] },
    showConfirm: { type: 'boolean', required: false, default: true },
    labelConfirm: { type: 'string', required: false, default: 'Confirm' },
    classNameConfirm: { type: 'string', required: false },
    variantConfirm: { type: 'string', required: false, default: 'default', enum: ['default'] },
    ...commonProperties(),
  };
}

export function tableModalDropdownItemPropertiesMapping() {
  return {
    ...dropdownItemPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableModalDropdownItemChildProperties() {
  return {

  };
}

export function tableModalDropdownItemChildPropertiesMapping() {
  return {

  };
}


export function tableModalDropdownItemVariants() {
  return {
    default: ''
  };
}
