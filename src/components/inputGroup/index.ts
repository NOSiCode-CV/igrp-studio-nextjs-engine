import {
  inputGroupProperties,
  inputGroupPropertiesMapping,
  inputGroupVariants,
  inputGroupChildProperties,
  inputGroupChildPropertiesMapping,
  inputGroupStyle,
  inputGroupRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('InputGroup');
    component.loadVariants(inputGroupVariants());
    component.loadGroup('forms');
    component.loadLabel('Input Group');
    component.getProperties(inputGroupProperties());
    component.getPropertiesMapping(inputGroupPropertiesMapping());
    component.getChildProperties(inputGroupChildProperties());
    component.getChildPropertiesMapping(inputGroupChildPropertiesMapping());
    component.getStyle(inputGroupStyle());
    component.getRules(inputGroupRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const INPUT_GROUP = 'inputGroup';
export { INPUT_GROUP };
