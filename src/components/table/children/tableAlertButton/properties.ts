import { classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { buttonProperties, buttonPropertiesMapping } from '../tableColumns/properties';

export function tableAlertButtonProperties() {
  return {
    ...buttonProperties('Alert'),
    title: { type: 'string', required: false, default: 'New Alert' },
    showCancel: { type: 'boolean', required: false, default: true },
    labelCancel: { type: 'string', required: false, default: 'Cancel' },
    classNameCancel: { type: 'string', required: false },
    variantCancel: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    showConfirm: { type: 'boolean', required: false, default: true },
    labelConfirm: { type: 'string', required: false, default: 'Confirm' },
    classNameConfirm: { type: 'string', required: false },
    variantConfirm: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function tableAlertButtonPropertiesMapping() {
  return {
    ...buttonPropertiesMapping(),
    iconClassName: 'iconClassName',
    ...commonPropertiesMapping(),
  };
}

export function tableAlertButtonChildProperties() {
  return {

  };
}

export function tableAlertButtonChildPropertiesMapping() {
  return {

  };
}


export function tableAlertButtonVariants() {
  return {
    default: ''
  };
}
