import { commonProperties, commonPropertiesMapping } from '../../../default/properties';

const segmentInterface = {
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
}

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
    headerType: { type: 'string', required: false, enum: [ 'sortToggle', 'sortDropdown', 'rowsSelect' ] },
    headerTitle: { type: 'string', required: false, default: defaultTitle ?? 'New Column' },
    className: { type: 'string', required: false }
  };
}

export function actionPropertiesMapping() {
  return {};
}

export function actionProperties(labelTrigger?: string) {
  return {
    labelTrigger: { type: 'string', required: true, default: labelTrigger ?? 'New Action' },
    iconProperties: {
      type: 'object',
      properties: {
        iconName: { type: 'string', required: false, default: "ArrowRight" },
      },
    },
    segments: segmentInterface,
    params: segmentInterface,
    className: { type: 'string', required: false },
    variant: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
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
    variant: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
  };
}

export function dropdownItemPropertiesMapping() {
  return {};
}

export function dropdownItemProperties(labelTrigger?: string) {
  return {
    labelTrigger: { type: 'string', required: true, default: labelTrigger ?? 'New Action' },
    showIcon: { type: 'boolean', required: false, default: true },
    iconProperties: {
      type: 'object',
      properties: {
        iconName: { type: 'string', required: false },
        iconClassName: { type: 'string', required: false },
      },
      required: false
    },
    className: { type: 'string', required: false },
  };
}

export function tableColumnsChildPropertiesMapping() {
  return {};
}

export function tableColumnsVariants() {
  return {};
}
