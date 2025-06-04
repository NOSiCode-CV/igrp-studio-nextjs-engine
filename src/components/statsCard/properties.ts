import {
  baseData,
  baseInteraction, baseRules, baseStyle,
  commonProperties,
  commonPropertiesMapping,
  iconProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function statsCardProperties() {
  return {
    cardBorderPosition: { type: 'string', required: false, default: 'left', enum: ['left', 'right', 'top', 'bottom', 'none'] },
    cardBorder: { type: 'string', required: false, default: 'rounded-xl', enum: ['none', 'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-3xl', 'rounded-full', 'square'] },
    cardVariant: { type: 'string', required: true, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    iconBackground: { type: 'string', required: false, default: 'none', enum: ['none', 'square', 'rounded'] },
    showIconBackground: { type: 'boolean', required: false, default: false },
    showIconBorder: { type: 'boolean', required: false, default: false },
    title: { type: 'string', required: false, default: 'Stat Card' },
    titleSize: { type: 'string', required: false, default: 'sm', enum: ['sm', 'md', 'lg', 'xl', '2xl'] },
    valueSize: { type: 'string', required: false, default: 'sm', enum: ['sm', 'md', 'lg', 'xl', '2xl'] },
    iconProperties: {
      type: 'object',
      properties: {
        showIcon: { type: 'boolean', required: false, default: true },
        iconName: { type: 'string', required: false, default: "Box" },
        iconSize: { type: 'string', required: false, default: 'md', enum: ['sm', 'md', 'lg', 'xl'] },
        iconVariant: { type: 'string', required: true, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
      },
    },
    image: { type: 'string', required: false },
    imageAlt: { type: 'string', required: false },
    className: { type: 'string', required: false },
    cardClassName: { type: 'string', required: false },
    titleClassName: { type: 'string', required: false },
    valueClassName: { type: 'string', required: false },
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
      ...baseData(INTERACTIONS_DEFAULTS.ZERO, INTERACTIONS_TYPES.VALUE, {
        id: '',
        name: 'stat{{id}}Value',
        type: 'string | number',
        defaultValue: '0'
      }, true), required: true
    },
  }
}

export function statsCardStyle() {
  return {
    ...baseStyle()
  }
}

export function statsCardRules() {
  return {
    ...baseRules()
  }
}
