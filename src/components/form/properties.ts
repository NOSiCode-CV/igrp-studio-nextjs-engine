import { baseInteraction, commonProperties, commonPropertiesMapping } from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';

export function formProperties() {
  return {
    validateMode: { type: 'string', required: false, default: 'onBlur', enum: ['onBlur'] },
    formClassName: { type: 'string', required: true, default: 'flex flex-col' },
    gridClassName: { type: 'string', required: true, default: 'flex flex-col' },
    resetAfterSubmit: { type: 'boolean', required: false, default: false },
    showAction: { type: 'boolean', required: false, default: false },
    submitText: { type: 'string', required: false, default: 'Submit' },
    submitVariant: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    ...commonProperties(),
  };
}

export function formPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

export function formInteractions() {
  return {
    onSubmit: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_WITH_EVENT, INTERACTIONS_TYPES.ON_SUBMIT), required: true },
    exposeSubmit: { ...baseInteraction(INTERACTIONS_DEFAULTS.EXPOSE_FORM_SUBMIT, INTERACTIONS_TYPES.EXPOSE_SUBMIT), required: false },
  };
}

export function formInteractionsMapping() {
  return {

  };
}

export function formVariants() {
  return {};
}