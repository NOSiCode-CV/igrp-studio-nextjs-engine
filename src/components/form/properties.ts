import { baseData, baseInteraction, commonProperties, commonPropertiesMapping } from '../default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../../utils/constants';
import { InteractionFieldVisibility } from '../../interfaces/types';

export function formProperties() {
  return {
    validationMode: { type: 'string', required: false, default: 'onBlur', enum: ['onBlur'] },
    gridClassName: { type: 'string', required: true, default: 'flex flex-col' },
    //formRef: { type: 'string', required: true, default: 'form{{id}}Ref' },
    resetAfterSubmit: { type: 'boolean', required: false, default: false },
    //showAction: { type: 'boolean', required: false, default: false },
    //submitText: { type: 'string', required: false, default: 'Submit' },
    //submitVariant: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    //cancelText: { type: 'string', required: false, default: 'Cancel' },
    //cancelVariant: { type: 'string', required: false, default: 'default', enum: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    ...commonProperties(),
  };
}

export function formPropertiesMapping() {
  return {
    ...commonPropertiesMapping(),
  };
}

function onSubmitInteractionFieldVisibility(): InteractionFieldVisibility {
  return {
    fnName: { visible: true },
    actionName: { visible: false },
    fnCustomSet: { visible: true },
    fnCustomCode: {
      imports: { visible: true },
      states: { visible: false },
      fnCode: { visible: false },
      actionCode: { visible: false }
    },
  }
}

export function formInteractions() {
  return {
    onSubmit: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_WITH_EVENT, INTERACTIONS_TYPES.ON_SUBMIT, undefined, onSubmitInteractionFieldVisibility()), required: true },
    //exposeForm: { ...baseInteraction(INTERACTIONS_DEFAULTS.EXPOSE_FORM, INTERACTIONS_TYPES.EXPOSE_FORM, [ { state: `const form{{id}}Ref = useRef<IGRPFormHandle<typeof {{type}}> | null>(null)` }]), required: false },
    //cancelAction: { ...baseInteraction(INTERACTIONS_DEFAULTS.ON_CLICK_NO_EVENT, INTERACTIONS_TYPES.CANCEL_ACTION), required: false },
  };
}

export function formData() {
  return {
    defaultValues: { ...baseData(undefined, INTERACTIONS_TYPES.VALUE,
        {
          id: '',
          name: 'contentForm{{id}}',
          type: 'z.infer<{{type}}ZodType>',
          defaultValue: 'null',
        }, true
      ), required: true },
  };
}

export function formInteractionsMapping() {
  return {

  };
}

export function formVariants() {
  return {};
}