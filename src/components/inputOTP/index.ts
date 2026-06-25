import {
  inputOTPProperties,
  inputOTPPropertiesMapping,
  inputOTPVariants,
  inputOTPChildProperties,
  inputOTPChildPropertiesMapping,
  inputOTPStyle,
  inputOTPRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('InputOTP');
    component.loadVariants(inputOTPVariants());
    component.loadGroup('forms');
    component.loadLabel('Input OTP');
    component.getProperties(inputOTPProperties());
    component.getPropertiesMapping(inputOTPPropertiesMapping());
    component.getChildProperties(inputOTPChildProperties());
    component.getChildPropertiesMapping(inputOTPChildPropertiesMapping());
    component.getStyle(inputOTPStyle());
    component.getRules(inputOTPRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const INPUT_OTP = 'inputOTP';
export { INPUT_OTP };
