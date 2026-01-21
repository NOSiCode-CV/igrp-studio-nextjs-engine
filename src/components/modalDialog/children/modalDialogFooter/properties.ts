import {
  baseRules,
  baseStyle,
  classProperties,
  commonProperties,
  commonPropertiesMapping,
} from '../../../default/properties';

export function modalDialogFooterProperties() {
  return {
    stickyFooter: { type: 'boolean', required: false },
    ...classProperties(),
    ...commonProperties(),
  };
}

export function modalDialogFooterPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function modalDialogFooterChildProperties() {
  return {};
}

export function modalDialogFooterChildPropertiesMapping() {
  return {};
}

export function modalDialogFooterVariants() {
  return {};
}

export function modalDialogFooterStyle() {
  return {
    ...baseStyle()
  }
}

export function modalDialogFooterRules() {
  return {
    ...baseRules()
  }
}