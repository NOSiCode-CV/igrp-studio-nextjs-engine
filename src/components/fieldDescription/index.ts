import {
  fieldDescriptionProperties,
  fieldDescriptionPropertiesMapping,
  fieldDescriptionVariants,
  fieldDescriptionChildProperties,
  fieldDescriptionChildPropertiesMapping,
  fieldDescriptionStyle,
  fieldDescriptionRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPFieldDescription');
    component.loadVariants(fieldDescriptionVariants());
    component.loadGroup('typography');
    component.loadLabel('Field Description');
    component.getProperties(fieldDescriptionProperties());
    component.getPropertiesMapping(fieldDescriptionPropertiesMapping());
    component.getChildProperties(fieldDescriptionChildProperties());
    component.getChildPropertiesMapping(fieldDescriptionChildPropertiesMapping());
    component.getStyle(fieldDescriptionStyle());
    component.getRules(fieldDescriptionRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const FIELD_DESCRIPTION = 'fieldDescription';
export { FIELD_DESCRIPTION };
