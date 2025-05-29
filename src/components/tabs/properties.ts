import { baseRules, baseStyle, commonProperties, commonPropertiesMapping } from '../default/properties';

export function tabsProperties() {
  return {
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    tabs: { type: 'array', required: true },
    tab1Content: { type: 'string', required: false },
    tab2Content: { type: 'string', required: false },
    description: { type: 'string', required: false },
    message: { type: 'string', required: false },
    ...commonProperties()
  };
}

export function tabsPropertiesMapping() {
  return {
    name: 'name',
    label: 'label',
    tabs: 'tabs',
    tab1Content: 'tab1Content',
    tab2Content: 'tab2Content',
    description: 'description',
    message: 'message',
    ...commonPropertiesMapping()
  };
}

export function tabsChildProperties() {
  return {
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    tabs: { type: 'array', required: true },
    tab1Content: { type: 'string', required: false },
    tab2Content: { type: 'string', required: false },
    description: { type: 'string', required: false },
    message: { type: 'string', required: false }
  };
}

export function tabsChildPropertiesMapping() {
  return {
    name: 'name',
    label: 'label',
    tabs: 'tabs',
    tab1Content: 'tab1Content',
    tab2Content: 'tab2Content',
    description: 'description',
    message: 'message'
  };
}

export function tabsVariants() {
  return {};
}

export function tabsStyle() {
  return {
    ...baseStyle()
  }
}

export function tabsRules() {
  return {
    ...baseRules()
  }
}
