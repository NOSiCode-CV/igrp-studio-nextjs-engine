import {
  toasterProperties,
  toasterPropertiesMapping,
  toasterVariants,
  toasterChildProperties,
  toasterChildPropertiesMapping,
  toasterStyle,
  toasterRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('Toaster');
    component.loadVariants(toasterVariants());
    component.loadGroup('feedback');
    component.loadLabel('Toaster');
    component.getProperties(toasterProperties());
    component.getPropertiesMapping(toasterPropertiesMapping());
    component.getChildProperties(toasterChildProperties());
    component.getChildPropertiesMapping(toasterChildPropertiesMapping());
    component.getStyle(toasterStyle());
    component.getRules(toasterRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const TOASTER = 'toaster';
export { TOASTER };
