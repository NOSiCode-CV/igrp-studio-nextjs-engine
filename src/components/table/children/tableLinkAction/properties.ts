import { baseInteraction, commonProperties, commonPropertiesMapping } from '../../../default/properties';
import { actionProperties, actionPropertiesMapping } from '../tableColumns/properties';

export function tableLinkActionProperties() {
  return {
    ...actionProperties('Link'),
    type: { type: 'string', required: true, default: 'link' },
    href: { type: 'string', required: false, default: 'https://www.igrp.cv/' },
    ...commonProperties(),
  };
}

export function tableLinkActionPropertiesMapping() {
  return {
    ...actionPropertiesMapping(),
    ...commonPropertiesMapping(),
  };
}

export function tableLinkActionChildProperties() {
  return {

  };
}

export function tableLinkActionChildPropertiesMapping() {
  return {

  };
}

export function tableLinkActionInteractions() {
  return {
    action: { ...baseInteraction, required: true, default: "(e) => handle{{id}}Click(e)" },
  };
}

export function tableLinkActionInteractionsMapping() {
  return {

  };
}

export function tableLinkActionVariants() {
  return {
    default: ''
  };
}
