import { baseRules, baseStyle, commonProperties, commonPropertiesMapping } from '../default/properties';

export function columnProperties() {
  return {
    variant: { type: 'string', required: true, enum: [
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
      ], default: 'span6'
    },
    ...commonProperties(),
  }
}

export function columnChildProperties() {
  return {}
}

export function columnPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  }
}

export function columnChildPropertiesMapping() {
  return {}
}

export function columnVariants() {
  return {
    span1: "col-span-1 flex flex-col gap-6",
    span2: "col-span-2 flex flex-col gap-6",
    span3: "col-span-3 flex flex-col gap-6",
    span4: "col-span-4 flex flex-col gap-6",
    span5: "col-span-5 flex flex-col gap-6",
    span6: "col-span-6 flex flex-col gap-6",
    span7: "col-span-7 flex flex-col gap-6",
    span8: "col-span-8 flex flex-col gap-6",
    span9: "col-span-9 flex flex-col gap-6",
    span10: "col-span-10 flex flex-col gap-6",
    span11: "col-span-11 flex flex-col gap-6",
    span12: "col-span-12 flex flex-col gap-6",
  }
}

export function columnStyle() {
  return {
    ...baseStyle()
  }
}

export function columnRules() {
  return {
    ...baseRules()
  }
}