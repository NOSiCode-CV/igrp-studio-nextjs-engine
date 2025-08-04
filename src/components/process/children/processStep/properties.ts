import {
  baseRules,
  baseStyle,
  commonProperties,
  commonPropertiesMapping,
} from '../../../default/properties';

export function processStepProperties() {
  return {
    variables: { type: 'array', items: { type: 'string' }, 'x-ui-widget': 'list' },
    projectArtifactId: { type: 'string', required: false, default: '' },
    taskKey: { type: 'string', required: false, default: '' },
    name: { type: 'string', required: false, default: '' },
    ...commonProperties(),
  }
}

export function processStepPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  }
}

export function processStepChildProperties() {
  return {}
}

export function processStepChildPropertiesMapping() {
  return {}
}

export function processStepInteractions() {
  return {
  };
}

export function processStepVariants() {
  return {}
}

export function processStepStyle() {
  return {
    ...baseStyle()
  }
}

export function processStepRules() {
  return {
    ...baseRules()
  }
}
