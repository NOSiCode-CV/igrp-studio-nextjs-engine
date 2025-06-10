import {
  baseData,
  baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function formListProperties() {
  return {
    label: { type: 'string', required: true, default: 'Separator List' },
    description: { type: 'string', required: true, },
    badgeValue: { type: 'string', required: false, },
    computeLabel: {
      type: 'object',
      required: false,
      properties: {
        code: { type: 'string', required: true, default: `Item \${index}`},
      }
    },
    addButtonLabel: { type: 'string', required: false, default: 'Add' },
    addButtonIconName: { type: 'string', required: false, default: 'Plus', 'x-ui-widget': 'icon' },
    className: { type: 'string', required: false, },
    badgeClassName: { type: 'string', required: false, },
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