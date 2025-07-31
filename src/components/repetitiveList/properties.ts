import { baseData, baseRules, baseStyle, commonProperties, commonPropertiesMapping } from '../default/properties';
import { INTERACTIONS_TYPES } from '../../utils/constants';

export function repetitiveListProperties() {
  return {
    ...commonProperties(),
  };
}

export function repetitiveListPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function repetitiveListChildProperties() {
  return {};
}

export function repetitiveListChildPropertiesMapping() {
  return {};
}

export function repetitiveListVariants() {
  return {
  };
}

export function repetitiveListStyle() {
  return {
    ...baseStyle()
  }
}

export function repetitiveListRules() {
  return {
    ...baseRules()
  }
}

export function repetitiveListData() {
  return {
    items: { ...baseData(undefined, INTERACTIONS_TYPES.ITEMS,
        {
          id: '',
          name: 'repetitiveList{{id}}',
          type: '{{type}}[]',
          defaultValue: '[]',
        }, true
      ), required: true },
  };
}