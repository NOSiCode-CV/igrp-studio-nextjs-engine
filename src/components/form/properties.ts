import { baseInteraction, commonProperties, commonPropertiesMapping } from '../default/properties';

export function formProperties() {
  return {
    control: { type: 'string', required: true },
    name: { type: 'string', required: true },
    label: { type: 'string', required: false },
    description: { type: 'string', required: false },
    message: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function formPropertiesMapping() {
  return {
    control: 'control',
    name: 'name',
    label: 'label',
    description: 'description',
    message: 'message',
    ...commonPropertiesMapping(),
  };
}

export function formInteractions() {
  return {
    onSubmit: { ...baseInteraction, required: true, default: "(e) => handle{{id}}Click(e)" },
  };
}

export function formInteractionsMapping() {
  return {

  };
}

export function formVariants() {
  return {};
}