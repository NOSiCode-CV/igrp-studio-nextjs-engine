import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function formProperties() {
  return {
    variant: { type: 'string', required: true, enum: [
        'auto',
        'initial',
        'none',
        'flex1',
        'flex2',
        'flex3',
        'flex-half',
        'flex-third',
        'flex-2-third',
        'flex-quarter',
        'flex-3-quarter',
        'row',
        'row-reverse',
        'col',
        'col-reverse',
        // Justify content options
        'justify-start',
        'justify-end',
        'justify-center',
        'justify-between',
        'justify-around',
        'justify-evenly',
        // Align items options
        'items-start',
        'items-end',
        'items-center',
        'items-baseline',
        'items-stretch',
        // Common combinations
        'center',
        'between',
        'center-col',
      ]
    },
    ...commonProperties(),
  }
}

export function formPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  }
}

export function formChildProperties() {
  return {}
}

export function formChildPropertiesMapping() {
  return {}
}

export function formVariants() {
  return {
    auto: 'flex-auto',
    initial: 'flex-initial',
    none: 'flex-none',
    flex1: 'flex-1',
    flex2: 'flex-2',
    flex3: 'flex-3',
    'flex-half': 'flex-[0.5]',
    'flex-third': 'flex-[0.33]',
    'flex-2-third': 'flex-[0.66]',
    'flex-quarter': 'flex-[0.25]',
    'flex-3-quarter': 'flex-[0.75]',
    row: 'flex-row',
    'row-reverse': 'flex-row-reverse',
    col: 'flex-col',
    'col-reverse': 'flex-col-reverse',
    // Justify content options
    'justify-start': 'justify-start',
    'justify-end': 'justify-end',
    'justify-center': 'justify-center',
    'justify-between': 'justify-between',
    'justify-around': 'justify-around',
    'justify-evenly': 'justify-evenly',
    // Align items options
    'items-start': 'items-start',
    'items-end': 'items-end',
    'items-center': 'items-center',
    'items-baseline': 'items-baseline',
    'items-stretch': 'items-stretch',
    // Common combinations
    center: 'items-center justify-center',
    between: 'items-center justify-between',
    'center-col': 'flex-col items-center justify-center',
  }
}