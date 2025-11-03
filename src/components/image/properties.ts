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

export function imageProperties() {
  return {
    src: { type: 'string', required: true, 'x-meta': { label: 'Source'}  },
    ratio: { type: 'string', required: false, default: '16/9', enum: ['1/1', '4/3', '16/9', '21/9'] },
    alt: { type: 'string', required: true, 'x-meta': { label: 'Alternative'}  },
    placeholder: { type: 'string', required: false },
    loading: { type: 'string', required: false, default: 'lazy', enum: ['lazy', 'eager'] },
    decoding: { type: 'string', required: false, default: 'async', enum: ['async', 'sync', 'auto'] },
    width: { type: 'number', required: false },
    height: { type: 'number', required: false },
    quality: { type: 'number', required: false },
    fill: { type: 'boolean', required: false },
    priority: { type: 'boolean', required: false },
    unoptimized: { type: 'boolean', required: false },
    preload: { type: 'boolean', required: false },
    overrideSrc: { type: 'string', required: false, 'x-meta': { label: 'Override Source'}  },
    rounded: { type: 'string', required: false, default: 'full', enum: ['none', 'sm', 'lg', 'xl', '2xl', '3xl', '4xl', 'full'] },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function imagePropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function imageChildProperties() {
  return {};
}

export function imageChildPropertiesMapping() {
  return {};
}

function interactionFieldVisibility(): InteractionFieldVisibility {
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

export function imageInteractions() {
  return {
    onLoad: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_WITH_EVENT, INTERACTIONS_TYPES.ON_LOAD, undefined, interactionFieldVisibility()), required: false },
    onError: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_WITH_EVENT, INTERACTIONS_TYPES.ON_ERROR, undefined, interactionFieldVisibility()), required: false },
    loader: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.LOADER, undefined, interactionFieldVisibility()), required: false },
  };
}

export function imageVariants() {
  return {};
}

export function imageStyle() {
  return {
    ...baseStyle()
  }
}

export function imageRules() {
  return {
    ...baseRules()
  }
}