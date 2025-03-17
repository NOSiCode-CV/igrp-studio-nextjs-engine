import { commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { actionProperties, actionPropertiesMapping } from '../tableColumns/properties';

export function tableAlertActionProperties() {
  return {
    ...actionProperties('Alert'),
    type: { type: 'string', required: true, default: 'alert' },
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

export function tableAlertActionPropertiesMapping() {
  return {
    ...actionPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableAlertActionChildProperties() {
  return {

  };
}

export function tableAlertActionChildPropertiesMapping() {
  return {

  };
}


export function tableAlertActionVariants() {
  return {
    default: ''
  };
}
