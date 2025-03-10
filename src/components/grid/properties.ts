import { CommonProperties } from '../../interfaces/types';

export function gridProperties() {
  return {
    padding: {type: 'string', required: false},
    gap: {type: 'string', required: false},
    paddingTop: {type: 'string', required: false},
    paddingBottom: {type: 'string', required: false},
    paddingHorizontal: {type: 'string', required: false},
    paddingVertical: {type: 'string', required: false},
    variant: {
      type: 'string',
      required: true,
      enum: [
        'default', 'cols1', 'cols2', 'cols3', 'cols4', 'cols5', 'cols6',
        'rows1', 'rows2', 'rows3', 'rows4', 'rows5', 'rows6',
        'holy-grail', 'sidebar-left', 'sidebar-right',
        'col-span-1', 'col-span-2', 'col-span-3', 'col-span-4', 'col-span-full',
        'col-start-1', 'col-start-2', 'col-start-3', 'col-start-4', 'col-start-5', 'col-start-6', 'col-start-auto',
        '-col-start-1', '-col-start-2', '-col-start-3', '-col-start-4', '-col-start-5', '-col-start-6',
        'col-end-1', 'col-end-2', 'col-end-3', 'col-end-4', 'col-end-5', 'col-end-6', 'col-end-auto',
        '-col-end-1', '-col-end-2', '-col-end-3', '-col-end-4', '-col-end-5', '-col-end-6',
        'col-auto', 'cols-auto', 'cols-min', 'cols-max',
        'row-span-1', 'row-span-2', 'row-span-3', 'row-span-4', 'row-span-5', 'row-span-6', 'row-span-full',
        'row-start-1', 'row-start-2', 'row-start-3', 'row-start-4', 'row-start-5', 'row-start-6', 'row-start-auto',
        '-row-start-1', '-row-start-2', '-row-start-3', '-row-start-4', '-row-start-5', '-row-start-6',
        'row-end-1', 'row-end-2', 'row-end-3', 'row-end-4', 'row-end-5', 'row-end-6', 'row-end-auto',
        '-row-end-1', '-row-end-2', '-row-end-3', '-row-end-4', '-row-end-5', '-row-end-6',
        'row-auto', 'rows-auto', 'rows-min', 'rows-max'
      ], default: 'default'
    }
  }
}

export function gridPropertiesMapping() {
  return {
    padding: {className: 'p-'},
    gap: {className: 'gap-'},
    paddingHorizontal: {className: 'px-'},
    paddingVertical: {className: 'py-'},
    paddingTop: {className: 'pt-'},
    paddingBottom: {className: 'pb-'}
  }
}

export function gridChildProperties() {
  return {
    padding: {type: 'string', required: false},
    paddingX: {type: 'string', required: false}
  }
}

export function gridChildPropertiesMapping() {
  return {
    padding: {className: 'p-'},
    paddingX: {className: 'px-'}
  }
}

export function gridVariants() {
  return {
    // Basic grid columns
    default: 'grid-cols-4',
    cols1: 'grid-cols-1',
    cols2: 'grid-cols-2',
    cols3: 'grid-cols-3',
    cols4: 'grid-cols-4',
    cols5: 'grid-cols-5',
    cols6: 'grid-cols-6',
    // Basic grid rows
    rows1: 'grid-rows-1',
    rows2: 'grid-rows-2',
    rows3: 'grid-rows-3',
    rows4: 'grid-rows-4',
    rows5: 'grid-rows-5',
    rows6: 'grid-rows-6',
    // Common layouts
    'holy-grail': 'grid-cols-[200px_1fr_200px] grid-rows-[auto_1fr_auto] min-h-screen',
    'sidebar-left': 'grid-cols-[250px_1fr]',
    'sidebar-right': 'grid-cols-[1fr_250px]',
    // Column span variants
    'col-span-1': 'col-span-1',
    'col-span-2': 'col-span-2',
    'col-span-3': 'col-span-3',
    'col-span-4': 'col-span-4',
    'col-span-full': 'col-span-full',

    // Column start variants
    'col-start-1': 'col-start-1',
    'col-start-2': 'col-start-2',
    'col-start-3': 'col-start-3',
    'col-start-4': 'col-start-4',
    'col-start-5': 'col-start-5',
    'col-start-6': 'col-start-6',
    'col-start-auto': 'col-start-auto',

    // Column start with negative values
    '-col-start-1': '-col-start-1',
    '-col-start-2': '-col-start-2',
    '-col-start-3': '-col-start-3',
    '-col-start-4': '-col-start-4',
    '-col-start-5': '-col-start-5',
    '-col-start-6': '-col-start-6',

    // Column end variants
    'col-end-1': 'col-end-1',
    'col-end-2': 'col-end-2',
    'col-end-3': 'col-end-3',
    'col-end-4': 'col-end-4',
    'col-end-5': 'col-end-5',
    'col-end-6': 'col-end-6',
    'col-end-auto': 'col-end-auto',

    // Column end with negative values
    '-col-end-1': '-col-end-1',
    '-col-end-2': '-col-end-2',
    '-col-end-3': '-col-end-3',
    '-col-end-4': '-col-end-4',
    '-col-end-5': '-col-end-5',
    '-col-end-6': '-col-end-6',

    // Column auto
    'col-auto': 'col-auto',
    'cols-auto': 'auto-cols-auto',
    'cols-min': 'auto-cols-min',
    'cols-max': 'auto-cols-max',

    // Row span variants
    'row-span-1': 'row-span-1',
    'row-span-2': 'row-span-2',
    'row-span-3': 'row-span-3',
    'row-span-4': 'row-span-4',
    'row-span-5': 'row-span-5',
    'row-span-6': 'row-span-6',
    'row-span-full': 'row-span-full',

    // Row start variants
    'row-start-1': 'row-start-1',
    'row-start-2': 'row-start-2',
    'row-start-3': 'row-start-3',
    'row-start-4': 'row-start-4',
    'row-start-5': 'row-start-5',
    'row-start-6': 'row-start-6',
    'row-start-auto': 'row-start-auto',

    // Row start with negative values
    '-row-start-1': '-row-start-1',
    '-row-start-2': '-row-start-2',
    '-row-start-3': '-row-start-3',
    '-row-start-4': '-row-start-4',
    '-row-start-5': '-row-start-5',
    '-row-start-6': '-row-start-6',

    // Row end variants
    'row-end-1': 'row-end-1',
    'row-end-2': 'row-end-2',
    'row-end-3': 'row-end-3',
    'row-end-4': 'row-end-4',
    'row-end-5': 'row-end-5',
    'row-end-6': 'row-end-6',
    'row-end-auto': 'row-end-auto',

    // Row end with negative values
    '-row-end-1': '-row-end-1',
    '-row-end-2': '-row-end-2',
    '-row-end-3': '-row-end-3',
    '-row-end-4': '-row-end-4',
    '-row-end-5': '-row-end-5',
    '-row-end-6': '-row-end-6',

    // Row auto
    'row-auto': 'row-auto',
    'rows-auto': 'auto-rows-auto',
    'rows-min': 'auto-rows-min',
    'rows-max': 'auto-rows-max',
  }
}