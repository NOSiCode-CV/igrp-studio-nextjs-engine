import {
  baseData, baseInteraction,
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';
import { tabsItemProperties } from './children/tabsItem/properties';

export function tabsProperties() {
  return {
    items: {
      type: 'array',
      items: {
        ...tabsItemProperties()
      },
      required: false,
      'x-ui-widget': 'list'
    },
    value: { type: 'string', required: false},
    variant: { type: 'string', required: false, default: 'default', enum: ['default', 'outline', 'pills', 'underline', 'cards'] },
    contentBorder: { type: 'boolean', required: false },
    fullWidth: { type: 'boolean', required: false },
    showBadge: { type: 'boolean', required: false },
    badgePlacement: { type: 'string', required: false, enum: ['start', 'end'], default: 'end' },
    orientation: { type: 'string', required: false, enum: ['horizontal', 'vertical'], default: 'horizontal' },
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
    ...classProperties(),
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
  return {};
}

function onValueChangeInteractionFieldVisibility(): InteractionFieldVisibility {
  return {
    fnName: { visible: true },
    actionName: { visible: false },
    fnCustomSet: { visible: true },
    fnCustomCode: {
      imports: { visible: false },
      states: { visible: false },
      fnCode: { visible: false },
      actionCode: { visible: false }
    },
  }
}

export function tabsInteractions() {
  return {
    onValueChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE, undefined, onValueChangeInteractionFieldVisibility()), required: false,  },
  }
}