import { CommonProperties } from '../../interfaces/types';

export function rangeSliderProperties() {
  return {
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    min: { type: 'number', required: false, default: 0 },
    max: { type: 'number', required: false, default: 100 },
    step: { type: 'number', required: false, default: 1 },
    description: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    message: { type: 'string', required: false }
  };
}

export function rangeSliderPropertiesMapping() {
  return {
    name: 'name',
    label: 'label',
    min: 'min',
    max: 'max',
    step: 'step',
    description: 'description',
    disabled: 'disabled',
    message: 'message'
  };
}

export function rangeSliderChildProperties() {
  return {
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    min: { type: 'number', required: false, default: 0 },
    max: { type: 'number', required: false, default: 100 },
    step: { type: 'number', required: false, default: 1 },
    description: { type: 'string', required: false },
    disabled: { type: 'boolean', required: false },
    message: { type: 'string', required: false }
  };
}

export function rangeSliderChildPropertiesMapping() {
  return {
    name: 'name',
    label: 'label',
    min: 'min',
    max: 'max',
    step: 'step',
    description: 'description',
    disabled: 'disabled',
    message: 'message'
  };
}

export function rangeSliderVariants() {
  return {};
}
