import {
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../default/properties';

export function avatarProperties() {
  return {
    iconProperties: {
      type: 'object',
      properties: {
        showIcon: { type: 'boolean', required: false, default: true },
        iconName: { type: 'string', required: false, default: "Check", 'x-ui-widget': 'icon' },
        iconNumber: { type: 'string', required: false },
        iconColor: { type: 'string', required: false, default: '#000000' },
        hasFallbackIcon: { type: 'boolean', required: false, default: true, 'x-ui-widget': 'switch', 'x-meta': { label: 'Has Fallback Icon?'} },
        badgeShowIcon: { type: 'boolean', required: false, default: true, 'x-ui-widget': 'switch', 'x-meta': { label: 'Show Badge Icon?'} },
        badgeIconName: { type: 'string', required: false, default: "Info", 'x-ui-widget': 'icon' },
        fallbackIcon: { type: 'string', required: false, default: 'User', 'x-ui-widget': 'icon', 'x-meta': { label: 'Fallback Icon'} },
      }
    },
    src: { type: 'string', required: false, 'x-meta': { label: 'Source'}  },
    size: { type: 'string', required: false, default: 'md', enum: ['sm', 'md', 'lg', 'xl'] },
    alt: { type: 'string', required: false, 'x-meta': { label: 'Alternative'}  },
    fallback: { type: 'string', required: false },
    hasStatus: { type: 'boolean', required: false },
    status: { type: 'string', required: true, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    showBadge: { type: 'boolean', required: false },
    badgeColor: { type: 'string', required: true, default: 'primary', enum: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'indigo' ] },
    badgeNumber: { type: 'string', required: false, default: '6' },
    rounded: { type: 'string', required: false, default: 'full', enum: ['none', 'sm', 'lg', 'xl', '2xl', '3xl', '4xl', 'full'] },
    fallbackClassName: { type: 'string', required: false },
    iconClassName: { type: 'string', required: false },

    ...classProperties(),
    ...commonProperties(),
  };
}

export function avatarPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function avatarChildProperties() {
  return {};
}

export function avatarChildPropertiesMapping() {
  return {};
}

export function avatarVariants() {
  return {};
}

export function avatarStyle() {
  return {
    ...baseStyle()
  }
}

export function avatarRules() {
  return {
    ...baseRules()
  }
}