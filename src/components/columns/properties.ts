import { CommonProperties } from '../../interfaces/types';

export function columnsProperties() {
  return {
    variant: { type: 'string', required: true, enum: [
      'default',
        'wide',
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
      ]
    }
  }
}

export function columnsChildProperties() {
  return {}
}

export function columnsPropertiesMapping() {
  return {}
}

export function columnsChildPropertiesMapping() {
  return {}
}

export function columnsVariants() {
  return {
    default: "gap-3 p-4",
    cols1: "grid grid-cols-1 gap-4",
    cols2: "grid grid-cols-2 gap-4",
    cols3: "grid grid-cols-3 gap-4",
    cols4: "grid grid-cols-4 gap-4",
    cols5: "grid grid-cols-5 gap-4",
    cols6: "grid grid-cols-6 gap-4",
    cols7: "grid grid-cols-7 gap-4",
    cols8: "grid grid-cols-8 gap-4",
    cols9: "grid grid-cols-9 gap-4",
    cols10: "grid grid-cols-10 gap-4",
    cols11: "grid grid-cols-11 gap-4",
    cols12: "grid grid-cols-12 gap-4",
  }
}