import { classProperties, commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { buttonProperties, buttonPropertiesMapping } from '../tableColumns/properties';

export function tableModalButtonProperties() {
  return {
    ...buttonProperties('Modal'),
    title: { type: 'string', required: false, default: 'New Modal' },
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

export function tableModalButtonPropertiesMapping() {
  return {
    ...buttonPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableModalButtonChildProperties() {
  return {

  };
}

export function tableModalButtonChildPropertiesMapping() {
  return {

  };
}


export function tableModalButtonVariants() {
  return {
    default: ''
  };
}
