import {
  baseData,
  baseInteraction,
  baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function dynamicRepeaterProperties() {
  return {
    label: { type: 'string', required: true, default: 'Separator List' },
    description: { type: 'string', required: true, },
    badgeValue: { type: 'string', required: false, },
    computeLabel: {
      type: 'object',
      required: false,
      properties: {
        code: { type: 'string', required: true, default: `Item \${index}`},
        fieldTag: { type: 'string', required: true, default: ''},
      }
    },
    addButtonLabel: { type: 'string', required: false, default: 'Add' },
    addButtonIconName: { type: 'string', required: false, default: 'Plus', 'x-ui-widget': 'icon' },
    className: { type: 'string', required: false, },
    badgeClassName: { type: 'string', required: false, },
    ...commonProperties(),
  };
}

export function dynamicRepeaterPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function dynamicRepeaterChildProperties() {
  return {};
}

export function dynamicRepeaterChildPropertiesMapping() {
  return {};
}

export function dynamicRepeaterVariants() {
  return {
  };
}

export function dynamicRepeaterStyle() {
  return {
    ...baseStyle()
  }
}

export function dynamicRepeaterRules() {
  return {
    ...baseRules()
  }
}

export function dynamicRepeaterData() {
  return {
    defaultItem: { ...baseData(INTERACTIONS_DEFAULTS.EMPTY_OBJECT, INTERACTIONS_TYPES.DEFAULT_VALUE,
        {
          id: '',
          name: 'dynamicRepeater{{id}}Default',
          type: '{{type}}',
          defaultValue: '{}',
        }, true
      ), required: true },
    computeLabel: { ...baseData(`Item \${index}`, INTERACTIONS_TYPES.COMPUTE_LABEL, undefined, undefined, `Item \${index}`), required: true },
  };
}

export function dynamicRepeaterInteractions() {
  return {

  };
}