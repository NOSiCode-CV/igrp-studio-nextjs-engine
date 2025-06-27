import { baseRules, baseStyle, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function modalDialogFooterProperties() {
  return {
    className: { type: 'string', required: false },
    stickyFooter: { type: 'boolean', required: false },
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