import {
  baseInteraction,
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { InteractionFieldVisibility } from '../../interfaces/types';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { accordionItemProperties } from './children/accordionItem/properties';

export function accordionProperties() {
  return {
    name: { type: 'string', required: false, default: 'Lorem Ipsum' },
    value: { type: 'string', required: false },
    items: {
      type: 'array',
      items: {
        ...accordionItemProperties()
      },
      required: false,
      'x-ui-widget': 'list'
    },
    defaultValue: { type: 'string', required: false },
    classNameContent: { type: 'string', required: false },
    classNameTrigger: { type: 'string', required: false },
    ...classProperties(),
    ...commonProperties()
  };
}

export function accordionPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function accordionChildProperties() {
  return {
  };
}

export function accordionChildPropertiesMapping() {
  return {
  };
}

export function accordionVariants() {
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

export function accordionInteractions() {
  return {
    onValueChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE, undefined, onValueChangeInteractionFieldVisibility()), required: false,  },
  };
}

export function accordionStyle() {
  return {
    ...baseStyle()
  }
}

export function accordionRules() {
  return {
    ...baseRules()
  }
}

export function accordionData() {
  return {
  };
}