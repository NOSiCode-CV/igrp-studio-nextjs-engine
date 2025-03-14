import { commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { actionProperties, actionPropertiesMapping } from '../tableColumns/properties';

export function tableModalActionProperties() {
  return {
    ...actionProperties('Modal'),
    type: { type: 'string', required: true, default: 'modal' },
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

export function tableModalActionPropertiesMapping() {
  return {
    ...actionPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableModalActionChildProperties() {
  return {

  };
}

export function tableModalActionChildPropertiesMapping() {
  return {

  };
}


export function tableModalActionVariants() {
  return {
    default: ''
  };
}
