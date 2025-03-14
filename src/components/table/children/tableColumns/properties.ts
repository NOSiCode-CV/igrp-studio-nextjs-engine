import { commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function tableColumnsProperties() {
  return {
    ...commonProperties(),
  };
}

export function tableColumnsPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function tableColumnsChildProperties() {
  return {};
}

export function cellPropertiesMapping() {
  return {};
}

export function cellProperties(defaultTitle?: string) {
  return {
    headerType: { type: 'string', required: false, enum: [ 'sortToggle', 'sortDropdown' ] },
    headerTitle: { type: 'string', required: false, default: defaultTitle ?? 'New Column' },
  };
}

export function actionPropertiesMapping() {
  return {};
}

export function actionProperties(labelTrigger?: string) {
  return {
    labelTrigger: { type: 'string', required: true, default: labelTrigger ?? 'New Action' },
    icon: { type: 'string', required: false, default: "ArrowRight" },
    className: { type: 'string', required: false },
    variant: { type: 'string', required: false, default: 'default', enum: ['default'] },
  };
}

export function buttonPropertiesMapping() {
  return {};
}

export function buttonProperties(labelTrigger?: string) {
  return {
    labelTrigger: { type: 'string', required: true, default: labelTrigger ?? 'New Action' },
    icon: { type: 'string', required: false, default: "ArrowRight" },
    className: { type: 'string', required: false },
    variant: { type: 'string', required: false, default: 'default', enum: ['default'] },
  };
}

export function dropdownItemPropertiesMapping() {
  return {};
}

export function dropdownItemProperties(labelTrigger?: string) {
  return {
    labelTrigger: { type: 'string', required: true, default: labelTrigger ?? 'New Action' },
    icon: { type: 'string', required: false, default: "ArrowRight" },
    className: { type: 'string', required: false },
    variant: { type: 'string', required: false, default: 'default', enum: ['default'] },
  };
}

export function tableColumnsChildPropertiesMapping() {
  return {};
}

export function tableColumnsVariants() {
  return {};
}
