import { baseRules, baseStyle, commonProperties, commonPropertiesMapping } from '../../../default/properties';

export function modalDialogDescriptionProperties() {
  return {
    content: { type: 'string', required: false, default: 'Lorem ipsum dolor sit amet' },
    className: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function modalDialogDescriptionPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function modalDialogDescriptionChildProperties() {
  return {
    className: { type: 'string', required: true, default: '' },
    ...commonProperties()
  }
}

export function modalDialogDescriptionChildPropertiesMapping() {
  return {
    className: { className: '' },
    ...commonPropertiesMapping()
  }
}

export function modalDialogDescriptionVariants() {
  return {
  };
}

export function modalDialogDescriptionStyle() {
  return {
    ...baseStyle()
  }
}

export function modalDialogDescriptionRules() {
  return {
    ...baseRules()
  }
}