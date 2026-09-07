import {
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';

const allowFeatures = [
  'autoplay', 'clipboard-write', 'encrypted-media', 'gyroscope',
  'picture-in-picture', 'web-share', 'accelerometer'
]

export function videoEmbedProperties() {
  return {
    src: { type: 'string', required: true, 'x-meta': { label: 'Source'}  },
    title: { type: 'string', required: true },
    aspectRatio: { type: 'string', required: false, default: '16/9', enum: ['1/1', '4/3', '16/9', '21/9', '3/2', 'auto'] },
    loading: { type: 'string', required: false, default: 'lazy', enum: ['lazy', 'eager'] },
    allow: { type: 'array', items: { type: 'string', required: true, enum: allowFeatures, default: 'autoplay', 'x-meta': { label: 'Allow Features'}}, required: false },
    allowFullScreen: { type: 'boolean', required: false, 'x-meta': { label: 'Allow Fullscreen?'} },
    muted: { type: 'boolean', required: false, 'x-meta': { label: 'Muted?'} },
    controls: { type: 'boolean', required: false, 'x-meta': { label: 'Controls?'} },
    loop: { type: 'boolean', required: false, 'x-meta': { label: 'Loop?'} },
    start: { type: 'number', required: false, default: 0 },
    autoplay: { type: 'boolean', required: false, 'x-meta': { label: 'Autoplay?' } },
    name: { type: 'string', required: false },
    width: { type: 'number', required: false },
    height: { type: 'number', required: false },

    ...classProperties(),
    ...commonProperties(),
  };
}

export function videoEmbedPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function videoEmbedChildProperties() {
  return {};
}

export function videoEmbedChildPropertiesMapping() {
  return {};
}

export function videoEmbedInteractions() {
  return {
  };
}

export function videoEmbedVariants() {
  return {
    '1/1': 'aspect-square',
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-video',
    '21/9': 'aspect-[21/9',
    '3/2': 'aspect-[3/2]',
    auto: 'aspect-auto'
  };
}

export function videoEmbedStyle() {
  return {
    ...baseStyle()
  }
}

export function videoEmbedRules() {
  return {
    ...baseRules()
  }
}
