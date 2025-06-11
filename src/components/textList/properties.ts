import {
  baseInteraction,
  baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function textListProperties() {
  return {
    type: { type: 'string', required: false, enum: ['unordered', 'ordered', 'checklist', 'steps', 'features', 'custom'], default: 'unordered' },
    animate: { type: 'boolean', default: false, required: false},
    interactive: { type: 'boolean', default: false, required: false},
    collapsible: { type: 'boolean', default: false, required: false},
    iconProperties: {
      type: 'object',
      properties: {
        customIcon: { type: 'string', required: false, 'x-ui-widget': 'icon' },
        iconGlobalColor: { type: 'string', required: true, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
      },
    },
    maxDepth: { type: 'number', required: false, default: 3, 'x-ui-widget': 'number' },
    size: { type: 'number', required: false, default: 3, 'x-ui-widget': 'number' },
    spacing: { type: 'number', required: false, default: 3, 'x-ui-widget': 'number' },
    variant: { type: 'string', required: true, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    className: { type: 'string', required: false },
    ...commonProperties()
  };
}

export function textListPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function textListChildProperties() {
  return {
  };
}

export function textListChildPropertiesMapping() {
  return {
  };
}

export function textListVariants() {
  return {};
}

export function textListStyle() {
  return {
    ...baseStyle()
  }
}

export function textListRules() {
  return {
    ...baseRules()
  }
}

export function textListData() {
  return {
  };
}

function onItemClickInteractionFieldVisibility(): InteractionFieldVisibility {
  return {
    fnName: { visible: true },
    actionName: { visible: false },
    fnCustomSet: { visible: true },
    fnCustomCode: {
      imports: { visible: true },
      states: { visible: false },
      fnCode: { visible: false },
      actionCode: { visible: false }
    },
  }
}

export function textListInteractions() {
  return {
    onItemClick: { ...baseInteraction(INTERACTIONS_DEFAULTS.FUNCTION_WITH_ITEM_INDEX, INTERACTIONS_TYPES.ON_CLICK, undefined, onItemClickInteractionFieldVisibility()), required: false,  },
  };
}