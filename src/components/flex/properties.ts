import { CommonProperties } from '../../interfaces/types';

export function formProperties() {
  return {}
}

export function formPropertiesMapping() {
  return {}
}

export function formVariants() {
  return {
    auto: 'flex flex-auto',
    initial: 'flex flex-initial',
    none: 'flex flex-none',
    'flex-1': 'flex-1',
    'flex-2': 'flex-2',
    'flex-3': 'flex-3',
    'flex-1-2': 'flex-[0.5]',
    'flex-1-3': 'flex-[0.33]',
    'flex-2-3': 'flex-[0.66]',
    'flex-1-4': 'flex-[0.25]',
    'flex-3-4': 'flex-[0.75]',
    row: 'flex flex-row',
    'row-reverse': 'flex flex-row-reverse',
    col: 'flex flex-col',
    'col-reverse': 'flex flex-col-reverse',
    // Justify content options
    'justify-start': 'flex justify-start',
    'justify-end': 'flex justify-end',
    'justify-center': 'flex justify-center',
    'justify-between': 'flex justify-between',
    'justify-around': 'flex justify-around',
    'justify-evenly': 'flex justify-evenly',
    // Align items options
    'items-start': 'flex items-start',
    'items-end': 'flex items-end',
    'items-center': 'flex items-center',
    'items-baseline': 'flex items-baseline',
    'items-stretch': 'flex items-stretch',
    // Common combinations
    center: 'flex items-center justify-center',
    between: 'flex items-center justify-between',
    'center-col': 'flex flex-col items-center justify-center',
  }
}