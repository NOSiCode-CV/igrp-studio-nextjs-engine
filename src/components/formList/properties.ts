import {
  baseData,
  baseRules,
  baseStyle, classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function formListProperties() {
  return {
    label: { type: 'string', required: true, default: 'Separator List' },
    description: { type: 'string', required: true, },
    color: { type: 'string', required: true, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    variant: { type: 'string', required: false, default: 'solid', enum: ['solid', 'outline', 'soft'] },
    badgeValue: { type: 'string', required: false, default: 'Form List' },
    computeLabel: {
      type: 'object',
      required: false,
      properties: {
        code: { type: 'string', required: true, default: `Item \${index}`},
      }
    },
    iconProperties: {
      type: 'object',
      properties: {
        showIcon: { type: 'boolean', required: false, default: false },
        iconName: { type: 'string', required: false, 'x-ui-widget': 'icon' },
        addButtonIconName: { type: 'string', required: false, default: 'Plus', 'x-ui-widget': 'icon' },
        iconClassName: { type: 'string', required: false },
        iconSize: { type: 'number', required: false },
      },
    },
    addButtonLabel: { type: 'string', required: false, default: 'Add' },
    dot: { type: 'boolean', required: false, default: false },
    allowEmpty: { type: 'boolean', required: false, default: false },
    badgeClassName: { type: 'string', required: false, },
    labelClassName: { type: 'string', required: false, },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function formListPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function formListChildProperties() {
  return {};
}

export function formListChildPropertiesMapping() {
  return {};
}

export function formListVariants() {
  return {
  };
}

export function formListStyle() {
  return {
    ...baseStyle()
  }
}

export function formListRules() {
  return {
    ...baseRules()
  }
}

export function formListData() {
  return {
    defaultItem: { ...baseData(INTERACTIONS_DEFAULTS.EMPTY_OBJECT, INTERACTIONS_TYPES.DEFAULT_VALUE,
        {
          id: '',
          name: 'formList{{id}}Default',
          type: '{{type}}',
          defaultValue: '{}',
        }, true
      ), required: true },
  };
}

export function formListInteractions() {
  return {

  };
}