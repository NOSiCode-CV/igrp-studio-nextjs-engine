import { CommonProperties } from '../../interfaces/types';

export function columnProperties() {
  return {
    variant: { type: 'string', required: true, enum: [
        'default',
        'span1',
        'span2',
        'span3',
        'span4',
        'span5',
        'span6',
        'span7',
        'span8',
        'span9',
        'span10',
        'span11',
        'span12',
      ]
    }
  }
}

export function columnChildProperties() {
  return {}
}

export function columnPropertiesMapping() {
  return {}
}

export function columnChildPropertiesMapping() {
  return {}
}

export function columnVariants() {
  return {
    default: "w-full flex flex-col p-0 gap-3",
    span1: "col-span-1",
    span2: "col-span-2",
    span3: "col-span-3",
    span4: "col-span-4",
    span5: "col-span-5",
    span6: "col-span-6",
    span7: "col-span-7",
    span8: "col-span-8",
    span9: "col-span-9",
    span10: "col-span-10",
    span11: "col-span-11",
    span12: "col-span-12",
  }
}