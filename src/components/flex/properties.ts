import { CommonProperties } from '../../interfaces/types';

export function formProperties() {
  return {}
}

export function formPropertiesMapping() {
  return {}
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
    'flex-1': 'flex-1',
    'flex-2': 'flex-2',
    'flex-3': 'flex-3',
    'flex-1-2': 'flex-[0.5]',
    'flex-1-3': 'flex-[0.33]',
    'flex-2-3': 'flex-[0.66]',
    'flex-1-4': 'flex-[0.25]',
    'flex-3-4': 'flex-[0.75]',
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