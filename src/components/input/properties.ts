import { CommonProperties } from '../../interfaces/types';

export function inputProperties() {
  return {
    type: { type: 'string', required: false, default: 'text', enum: [
        'text',
        'email',
        'password',
        'number',
        'tel',
        'url',
        'search',
        'date',
        'datetime-local',
        'month',
        'week',
        'time',
        'color'
      ] },
    labelText: { type: 'string', required: false, default: '' },
    floatingLabel: { type: 'string', required: false, default: false },
    placeholder: { type: 'string', required: false, default: '' },
    helperText: { type: 'string', required: false, default: '' },
    showIcon: { type: 'boolean', required: false, default: false },
    iconName: { type: 'string', required: false, default: '' },
    iconSize: { type: 'string', required: false, default: '16' },
    iconPlacement: { type: 'string', required: false, enum: ['start', 'end'], default: 'start' },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    iconClassName: { type: 'string', required: false, default: '' },
    customProperties: { type: 'array', required: false }
  };
}

export function inputPropertiesMapping() {
  return {};
}

export function inputChildProperties() {
  return {};
}

export function inputChildPropertiesMapping() {
  return {};
}

export function inputVariants() {
  return {};
}
