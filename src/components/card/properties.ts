import { CommonProperties } from '../../interfaces/types';

export function cardProperties() {
  return {
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    title: { type: 'string', required: false },
    subtitle: { type: 'string', required: false },
    body: { type: 'string', required: false },
    footer: { type: 'string', required: false },
    shadow: { type: 'boolean', required: false },
    border: { type: 'boolean', required: false },
    description: { type: 'string', required: false },
    message: { type: 'string', required: false }
  };
}

export function cardPropertiesMapping() {
  return {
    name: 'name',
    label: 'label',
    title: 'title',
    subtitle: 'subtitle',
    body: 'body',
    footer: 'footer',
    shadow: 'shadow',
    border: 'border',
    description: 'description',
    message: 'message'
  };
}

export function cardVariants() {
  return {};
}
