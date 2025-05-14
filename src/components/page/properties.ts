import { baseInteraction, commonProperties, commonPropertiesMapping } from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function pageProperties() {
  return {
    variant: { type: 'string', required: true, enum: ['default', 'narrow', 'wide'] },
    ...commonProperties(),
  }
}

export function pagePropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  }
}

export function pageChildProperties() {
  return {}
}

export function pageChildPropertiesMapping() {
  return {}
}

export function pageInteractions() {
  return {
    onLoad: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_LOAD), required: true },
  };
}

export function pageVariants() {
  return {
    default: 'mx-auto px-4',
    narrow: 'mx-auto px-4 max-w-4xl',
    wide: 'mx-auto px-4 max-w-7xl',
  }
}