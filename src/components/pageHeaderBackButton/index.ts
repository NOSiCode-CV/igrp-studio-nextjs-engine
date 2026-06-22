import {
  pageHeaderBackButtonProperties,
  pageHeaderBackButtonPropertiesMapping,
  pageHeaderBackButtonVariants,
  pageHeaderBackButtonChildProperties,
  pageHeaderBackButtonChildPropertiesMapping,
  pageHeaderBackButtonStyle,
  pageHeaderBackButtonRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('IGRPPageHeaderBackButton');
    component.loadVariants(pageHeaderBackButtonVariants());
    component.loadGroup('navigation');
    component.loadLabel('Page Header Back Button');
    component.getProperties(pageHeaderBackButtonProperties());
    component.getPropertiesMapping(pageHeaderBackButtonPropertiesMapping());
    component.getChildProperties(pageHeaderBackButtonChildProperties());
    component.getChildPropertiesMapping(pageHeaderBackButtonChildPropertiesMapping());
    component.getStyle(pageHeaderBackButtonStyle());
    component.getRules(pageHeaderBackButtonRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const PAGE_HEADER_BACK_BUTTON = 'pageHeaderBackButton';
export { PAGE_HEADER_BACK_BUTTON };
