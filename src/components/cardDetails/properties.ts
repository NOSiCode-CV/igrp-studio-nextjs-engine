import {
  baseData,
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { cardDetailsItemProperties } from './children/cardDetailsItem/properties';

export function cardDetailsProperties() {
  return {
    items: {
      type: 'array',
      items: {
        ...cardDetailsItemProperties()
      },
      required: false,
      'x-ui-widget': 'list'
    },
    title: { type: 'string', required: false, default: 'Lorem Ipsum' },
    description: { type: 'string', required: false, default: 'Lorem ipsum dolor sit amet' },
    contentClassName: { type: 'string', required: false },
    ...classProperties(),
    ...commonProperties()
  };
}

export function cardDetailsPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function cardDetailsChildProperties() {
  return {
  };
}

export function cardDetailsChildPropertiesMapping() {
  return {
  };
}

export function cardDetailsVariants() {
  return {};
}

export function cardDetailsStyle() {
  return {
    ...baseStyle()
  }
}

export function cardDetailsRules() {
  return {
    ...baseRules()
  }
}

export function cardDetailsData() {
  return {
  };
}