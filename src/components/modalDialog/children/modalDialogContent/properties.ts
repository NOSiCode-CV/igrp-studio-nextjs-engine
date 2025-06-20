import { baseRules, baseStyle, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function modalDialogContentProperties() {
  return {
    className: { type: 'string', required: false },
    size: { type: 'string', required: false, enum: ["sm", "md", "lg", "xl", "full"], default: "md" },
    ...commonProperties(),
  };
}

export function modalDialogContentPropertiesMapping() {
  return {
    spaceX: {
      className: 'space-x-'
    },
    spaceY: {
      className: 'space-y-'
    },
    ...commonPropertiesMapping(),
  };
}

export function modalDialogContentChildProperties() {
  return {
    className: { type: 'string', required: true, default: '' },
    ...commonProperties()
  }
}

export function modalDialogContentChildPropertiesMapping() {
  return {
    className: { className: '' },
    ...commonPropertiesMapping()
  }
}

export function modalDialogContentVariants() {
  return {
  };
}

export function modalDialogContentStyle() {
  return {
    ...baseStyle()
  }
}

export function modalDialogContentRules() {
  return {
    ...baseRules()
  }
}