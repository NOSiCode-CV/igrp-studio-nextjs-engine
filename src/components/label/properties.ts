import { commonProperties, commonPropertiesMapping } from '../default/properties';

export function labelProperties() {
  return {
    labelText: { type: 'string', required: false, default: 'Label Text' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function labelPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function labelChildProperties() {
  return {};
}

export function labelChildPropertiesMapping() {
  return {};
}

export function labelVariants() {
  return {};
}
