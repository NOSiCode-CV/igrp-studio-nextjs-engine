import { commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { dropdownItemProperties, dropdownItemPropertiesMapping } from '../tableColumns/properties';

export function tableAlertDropdownItemProperties() {
  return {
    ...dropdownItemProperties('Alert'),
    title: { type: 'string', required: false, default: 'New Alert' },
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

export function tableAlertDropdownItemPropertiesMapping() {
  return {
    ...dropdownItemPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableAlertDropdownItemChildProperties() {
  return {

  };
}

export function tableAlertDropdownItemChildPropertiesMapping() {
  return {

  };
}


export function tableAlertDropdownItemVariants() {
  return {
    default: ''
  };
}
