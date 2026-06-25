import { baseRules, baseStyle, classProperties, commonProperties, commonPropertiesMapping } from '../default/properties';

export function userAvatarProperties() {
  return {
    user: { type: 'object', required: false, properties: { name: { type: 'string' },
    email: { type: 'string' }, avatar: { type: 'string' } } },
    size: { type: 'string', required: false, default: 'md', enum: ['sm', 'md', 'lg'] },
    image: { type: 'string', required: false },
    alt: { type: 'string', required: false },
    fallbackContent: { type: 'string', required: false, default: 'U' },
    fallbackClass: { type: 'string', required: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function userAvatarPropertiesMapping() { return { ...commonPropertiesMapping() }; }
export function userAvatarChildProperties() { return {}; }
export function userAvatarChildPropertiesMapping() { return {}; }
export function userAvatarVariants() { return {}; }
export function userAvatarStyle() { return { ...baseStyle() }; }
export function userAvatarRules() { return { ...baseRules() }; }
