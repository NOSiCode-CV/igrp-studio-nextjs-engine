import {
  baseData,
  baseInteraction,
  baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function menuNavigationProperties() {
  return {
    targetRef: { type: 'string', required: true, default: '', 'x-widget-ui': 'select', 'x-meta': { label: 'Target Component Reference' } },
    title: { type: 'string', required: false, default: 'Menu' },
    badgeColor: { type: 'string', required: true, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    badgeVariant: { type: 'string', required: false, default: 'solid', enum: ['solid', 'outline', 'soft'] },
    badgeContent: { type: 'string', required: false, default: '#' },
    badgeClassName: { type: 'string', required: false },
    showChevron: { type: 'boolean', default: true, required: false},
    isStickyTop: { type: 'boolean', default: false, required: false},
    className: { type: 'string', required: false },
    ...commonProperties()
  };
}

export function menuNavigationPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function menuNavigationChildProperties() {
  return {
  };
}

export function menuNavigationChildPropertiesMapping() {
  return {
  };
}

export function menuNavigationVariants() {
  return {};
}

export function menuNavigationStyle() {
  return {
    ...baseStyle()
  }
}

export function menuNavigationRules() {
  return {
    ...baseRules()
  }
}

export function menuNavigationData() {
  return {
    activeSection: { ...baseData(INTERACTIONS_DEFAULTS.EMPTY_ARRAY, INTERACTIONS_TYPES.ACTIVE_SECTION, {
        id: '',
        name: 'menuNavigation{{id}}ActiveSection',
        type: 'string',
        defaultValue: ''
      }, true), required: true },
  };
}

function onSectionChangeInteractionFieldVisibility(): InteractionFieldVisibility {
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

export function menuNavigationInteractions() {
  return {
    onSectionChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE, undefined, onSectionChangeInteractionFieldVisibility()), required: false,  },
  };
}