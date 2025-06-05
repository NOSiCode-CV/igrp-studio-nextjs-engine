import { baseData, baseRules, baseStyle, commonProperties, commonPropertiesMapping } from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function tabsProperties() {
  return {
    variant: { type: 'string', required: false, default: 'default', enum: ['default', 'outline', 'pills', 'underline', 'cards'] },
    tabListClassName: { type: 'string', required: false },
    tabTriggerClassName: { type: 'string', required: false },
    tabContentClassName: { type: 'string', required: false },
    iconProperties: {
      type: 'object',
      properties: {
        showIcon: { type: 'boolean', required: false, default: false },
        iconPlacement: { type: 'string', required: false, enum: ['start', 'end'], default: 'start' },
      },
    },
    contentBorder: { type: 'boolean', default: false, required: false},
    fullWidth: { type: 'boolean', default: false, required: false},
    ...commonProperties()
  };
}

export function tabsPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function tabsChildProperties() {
  return {
  };
}

export function tabsChildPropertiesMapping() {
  return {
  };
}

export function tabsVariants() {
  return {};
}

export function tabsStyle() {
  return {
    ...baseStyle()
  }
}

export function tabsRules() {
  return {
    ...baseRules()
  }
}

export function tabsData() {
  return {
    items: { ...baseData(INTERACTIONS_DEFAULTS.EMPTY_ARRAY, INTERACTIONS_TYPES.ITEMS, {
        id: '',
        name: 'tabs{{id}}Items',
        type: 'IGRPTabItem[]',
        defaultValue: '[]'
      }, true), required: true },
  };
}