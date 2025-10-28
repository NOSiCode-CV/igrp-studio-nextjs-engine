import {
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';

export function aspectProperties() {
  return {
    variant: { type: 'string', required: true, enum: ['square', 'video', 'auto', 'portrait', 'landscape'] },
    ...classProperties(),
    ...commonProperties(),
  }
}

export function aspectChildProperties() {
  return {}
}

export function aspectPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  }
}

export function aspectChildPropertiesMapping() {
  return {}
}

export function aspectVariants() {
  return {
    square: "aspect-square",
    video: "aspect-video",
    auto: "aspect-auto",
    portrait: "aspect-[2/3]",
    landscape: "aspect-[3/2]",
  }
}

export function aspectStyle() {
  return {
    ...baseStyle()
  }
}

export function aspectRules() {
  return {
    ...baseRules()
  }
}