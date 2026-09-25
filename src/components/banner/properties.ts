import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function bannerProperties() {
  return {
    variant: { type: 'string', required: true, default: 'announcement', enum: ['cookie', 'announcement'] },
    message: { type: 'string', required: true, default: 'Banner message' },
    learnMoreHref: { type: 'string', required: false, 'x-ui-widget': 'uri' },
    learnMoreLabel: { type: 'string', required: false, default: 'Learn more' },
    acceptLabel: { type: 'string', required: false, default: 'Accept' },
    declineLabel: { type: 'string', required: false, default: 'Decline' },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function bannerPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function bannerChildProperties() { return {}; }
export function bannerChildPropertiesMapping() { return {}; }
export function bannerVariants() { return {}; }
export function bannerStyle() { return { ...baseStyle() }; }
export function bannerRules() { return { ...baseRules() }; }
