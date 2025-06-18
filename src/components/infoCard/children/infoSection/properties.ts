import {
  baseData,
  baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
} from '../../../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../../../utils/constants';

export function infoSectionProperties() {
  return {
  };
}

export function infoSectionPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function infoSectionChildProperties() {
  return {};
}

export function infoSectionChildPropertiesMapping() {
  return {};
}

export function infoSectionVariants() {
  return {
    solid: "solid",
    outline: "outline",
    soft: "soft",
  };
}

export function infoSectionInteractions() {
  return {
  };
}

export function infoSectionInteractionsMapping() {
  return {
  };
}

export function infoSectionStyle() {
  return {
    ...baseStyle()
  }
}

export function infoSectionRules() {
  return {
    ...baseRules()
  }
}

export function infoSectionData() {
  return {
    items: { ...baseData(INTERACTIONS_DEFAULTS.EMPTY_ARRAY, INTERACTIONS_TYPES.ITEMS, {
        id: '',
        name: 'infoCard{{id}}Items',
        type: 'IGRPTabItem[]',
        defaultValue: '[]'
      }), required: false },
  }
}