import {
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../../../default/properties';

export function modalDialogHeaderProperties() {
  return {
    stickyHeader: { type: 'boolean', required: false },
    ...classProperties(),
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