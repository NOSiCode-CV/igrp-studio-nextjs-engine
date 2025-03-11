import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function inputProperties() {
  return {
    type: { type: 'string', required: false, default: 'text', enum: [
        'text',
        'email',
        'password',
        'number',
        'tel',
        'url',
        'color'
      ] },
    labelText: { type: 'string', required: false, default: 'Input Text' },
    floatingLabel: { type: 'string', required: false, default: false },
    placeholder: { type: 'string', required: false, default: '' },
    helperText: { type: 'string', required: false, default: '' },
    showIcon: { type: 'boolean', required: false, default: false },
    iconName: { type: 'string', required: false, },
    iconSize: { type: 'string', required: false },
    iconPlacement: { type: 'string', required: false, enum: ['start', 'end'] },
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    iconClassName: { type: 'string', required: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function inputPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
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
