import {
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';

const variantProperties = { type: 'string', required: true, enum: [
    'cols1',
    'cols2',
    'cols3',
    'cols4',
    'cols5',
    'cols6',
    'cols7',
    'cols8',
    'cols9',
    'cols10',
    'cols11',
    'cols12'
  ]}

export function columnsProperties() {
  return {
    variant: {
      type: 'object',
      required: true,
      properties: {
        default: { ...variantProperties, default: 'cols1'  },
        xs: { ...variantProperties, 'x-meta': { label: 'Extra Small' } },
        md: { ...variantProperties, default: 'cols2', 'x-meta': { label: 'Medium' } },
        lg: { ...variantProperties, default: 'cols4', 'x-meta': { label: 'Large' } },
        xl: { ...variantProperties, 'x-meta': { label: 'Extra Large'}  },
      },
    },
    gap: {
      type: 'number',
      required: false,
      default: 4,
      enum: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '8',
        '10',
        '12',
        '16',
        '20',
        '24',
        '32',
        '40',
        '48',
        '56',
        '64',
      ],
    },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function columnsChildProperties() {
  return {}
}

export function columnsPropertiesMapping() {
  return {
    gap: { className: 'gap-' },
    ...commonPropertiesMapping(),
  }
}

export function columnsChildPropertiesMapping() {
  return {}
}

export function columnsVariants() {
  return {
    cols1: "grid-cols-1",
    cols2: "grid-cols-2",
    cols3: "grid-cols-3",
    cols4: "grid-cols-4",
    cols5: "grid-cols-5",
    cols6: "grid-cols-6",
    cols7: "grid-cols-7",
    cols8: "grid-cols-8",
    cols9: "grid-cols-9",
    cols10: "grid-cols-10",
    cols11: "grid-cols-11",
    cols12: "grid-cols-12",
  }
}

export function columnsStyle() {
  return {
    ...baseStyle()
  }
}

export function columnsRules() {
  return {
    ...baseRules()
  }
}