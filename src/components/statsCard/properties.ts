import {
  baseData,
  baseInteraction,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function statsCardProperties() {
  return {
    variant: { type: 'string', required: true, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    borderPosition: { type: 'string', required: false, default: 'left', enum: ['left', 'right', 'top', 'bottom'] },
    border: { type: 'boolean', required: false, default: false },
    title: { type: 'string', required: false, default: 'Stat Card' },
    iconProperties: {
      type: 'object',
      properties: {
        showIcon: { type: 'boolean', required: false, default: true },
        iconName: { type: 'string', required: false, default: "Box" },
      },
    },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function statsCardPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function statsCardChildProperties() {
  return {};
}

export function statsCardChildPropertiesMapping() {
  return {};
}

export function statsCardVariants() {
  return {
  };
}

function onClickInteractionFieldVisibility(): InteractionFieldVisibility {
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

export function statsCardInteractions() {
  return {
    onClick: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CLICK, undefined, onClickInteractionFieldVisibility()), required: true },
  };
}

export function statsCardInteractionsMapping() {
  return {
  };
}

export function statsCardData() {
  return {
    value: {
      ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.VALUE, {
        id: '',
        name: 'stat{{id}}Value',
        type: 'string',
        defaultValue: '{{value}}'
      }), required: true
    },
  }
}