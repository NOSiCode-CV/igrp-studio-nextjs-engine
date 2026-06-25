import {
  baseData,
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function infoCardProperties() {
  return {
    title: { type: 'string', required: false, default: 'Lorem Ipsum' },
    colorSection: { type: 'string', required: true, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    variantSection: { type: 'string', required: false, default: 'outline', enum: ['solid', 'outline', 'soft'] },
    orientation: { type: 'string', required: false, default: 'vertical', enum: ['horizontal', 'vertical'] },
    titleClassName: { type: 'string', required: false },
    contentClassName: { type: 'string', required: false },

    ...classProperties(),
    ...commonProperties()
  };
}

export function infoCardPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function infoCardChildProperties() {
  return {
  };
}

export function infoCardChildPropertiesMapping() {
  return {
  };
}

export function infoCardVariants() {
  return {};
}

export function infoCardStyle() {
  return {
    ...baseStyle()
  }
}

export function infoCardRules() {
  return {
    ...baseRules()
  }
}

export function infoCardData() {
  return {
  };
}