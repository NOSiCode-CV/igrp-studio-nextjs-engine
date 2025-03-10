import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function columnsProperties() {
  return {
    variant: { type: 'string', required: true, enum: [
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
      ], default: 'cols2'
    },
    gap: {type: 'number', required: false, default: 4, enum: ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64']},

    ...commonProperties(),
  }
}

export function columnsChildProperties() {
  return {}
}

export function columnsPropertiesMapping() {
  return {
    gap: { className: 'gap' },
    ...commonPropertiesMapping(),
  }
}

export function columnsChildPropertiesMapping() {
  return {}
}

export function columnsVariants() {
  return {
    cols1: "grid-cols-1 flex flex-col",
    cols2: "grid-cols-2 flex flex-col",
    cols3: "grid-cols-3 flex flex-col",
    cols4: "grid-cols-4 flex flex-col",
    cols5: "grid-cols-5 flex flex-col",
    cols6: "grid-cols-6 flex flex-col",
    cols7: "grid-cols-7 flex flex-col",
    cols8: "grid-cols-8 flex flex-col",
    cols9: "grid-cols-9 flex flex-col",
    cols10: "grid-cols-10 flex flex-col",
    cols11: "grid-cols-11 flex flex-col",
    cols12: "grid-cols-12 flex flex-col",
  }
}