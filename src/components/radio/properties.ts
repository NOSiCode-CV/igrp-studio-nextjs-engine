import {
  baseData,
  baseInteraction,
  baseRules,
  baseStyle, classProperties,
  commonProperties,
  commonPropertiesMapping, dataCommonProperties,
} from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function radioGroupProperties() {
  return {
    value: { type: 'string', required: false },
    label: { type: 'string', required: false },
    dir: { type: 'string', required: false, enum: ['ltr', 'rtl'], default: 'ltr' },
    orientation: { type: 'string', required: false, enum: ['horizontal', 'vertical'], default: 'vertical' },
    helperText: { type: 'string', required: false, default: '' },
    error: { type: 'string', required: false },
    variant: { type: 'string', required: false, enum: ['default', 'outline', 'soft'], default: 'default' },
    size: { type: 'string', required: false, enum: ["sm", "md", "lg"], default: "md" },
    gridSize: { type: 'string', required: false, enum: ['default', 'full', '1/2', '1/3', '2/3', '1/4', '3/4'], default: 'default' },
    required: { type: 'boolean', required: false, default: false },
    disabled: { type: 'boolean', required: false, default: false },
    message: { type: 'string', required: false },
    labelClassName: { type: 'string', required: false },
    ...classProperties(),
    ...dataCommonProperties(),
    ...commonProperties(),
  };
}

export function radioGroupPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function radioGroupChildProperties() {
  return {

  };
}

export function radioGroupChildPropertiesMapping() {
  return {

  };
}

export function radioGroupVariants() {
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

export function radioGroupInteractions() {
  return {
    onValueChange: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.ON_CHANGE, undefined, onValueChangeInteractionFieldVisibility()), required: true,  },
  };
}

export function radioGroupData() {
  return {
    value: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.VALUE, {
        id: '',
        name: 'radio{{id}}Value',
        type: 'string',
        defaultValue: '{{value}}'
      }), required: true },
    options: { ...baseData(INTERACTIONS_DEFAULTS.EMPTY_ARRAY, INTERACTIONS_TYPES.OPTIONS, {
        id: '',
        name: 'radio{{id}}Options',
        type: 'IGRPOptionsProps[]',
        defaultValue: '[]'
      }, true), required: true },
    //defaultValue: { ...baseData(INTERACTIONS_DEFAULTS.UNDEFINED, INTERACTIONS_TYPES.DEFAULT_VALUE), required: false },
  };
}

export function radioStyle() {
  return {
    ...baseStyle()
  }
}

export function radioRules() {
  return {
    ...baseRules()
  }
}
