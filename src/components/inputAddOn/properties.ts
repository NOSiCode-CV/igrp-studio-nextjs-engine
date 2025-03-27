import { baseInteraction, commonProperties, commonPropertiesMapping, iconProperties } from '../default/properties';

export function inputAddOnProperties() {
  return {
    labelText: { type: 'string', required: false, default: 'InputAddOn Text' },
    //floatingLabel: { type: 'boolean', required: false, default: false },
    optionLabel: { type: 'string', required: false, default: 'Add On Option' },
    //helperText: { type: 'string', required: false, default: '' },
    selectValue: { type: 'string', required: false, default: '' },
    error: { type: 'string', required: false },
    options: { type: 'array', items: { value: { type: 'string', required: true }, label: { type: 'string', required: true },
        color: { type: 'string', required: false } }, required: true }, // Array of objects with value and label
    disabled: { type: 'boolean', required: false, default: false },
    required: { type: 'boolean', required: true, default: false },
    classNameGlobal: { type: 'string', required: false },
    classNameLabel: { type: 'string', required: false },
    ...commonProperties(),
  };
}

export function inputAddOnPropertiesMapping() {
  return {
    ...commonPropertiesMapping()
  };
}

export function inputAddOnChildProperties() {
  return {};
}

export function inputAddOnChildPropertiesMapping() {
  return {};
}

export function inputAddOnInteractions() {
  return {
    value: { ...baseInteraction, required: true, default: 'value' },
    onSelectValueChange: { ...baseInteraction, required: true, default: '(e) => set{{id}}Value(e)' },
  };
}

export function inputAddOnInteractionsMapping() {
  return {

  };
}


export function inputAddOnVariants() {
  return {};
}
