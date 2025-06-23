import { baseRules, baseStyle, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function modalDialogTitleProperties() {
  return {
    content: { type: 'string', required: false, default: 'Modal Dialog' },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function modalDialogTitlePropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function modalDialogTitleChildProperties() {
  return {
    className: { type: 'string', required: true, default: '' },
    ...commonProperties()
  }
}

export function modalDialogTitleChildPropertiesMapping() {
  return {
    className: { className: '' },
    ...commonPropertiesMapping()
  }
}

export function modalDialogTitleVariants() {
  return {
  };
}

export function modalDialogTitleStyle() {
  return {
    ...baseStyle()
  }
}

export function modalDialogTitleRules() {
  return {
    ...baseRules()
  }
}