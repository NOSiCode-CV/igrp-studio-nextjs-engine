import { baseRules, baseStyle, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function modalDialogHeaderProperties() {
  return {
    className: { type: 'string', required: false },
    stickyHeader: { type: 'boolean', required: false },
    ...commonProperties(),
  };
}

export function modalDialogHeaderPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function modalDialogHeaderChildProperties() {
  return {};
}

export function modalDialogHeaderChildPropertiesMapping() {
  return {};
}

export function modalDialogHeaderVariants() {
  return {};
}

export function modalDialogHeaderStyle() {
  return {
    ...baseStyle()
  }
}

export function modalDialogHeaderRules() {
  return {
    ...baseRules()
  }
}