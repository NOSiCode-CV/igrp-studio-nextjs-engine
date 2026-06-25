import {
  sheetProperties,
  sheetPropertiesMapping,
  sheetVariants,
  sheetChildProperties,
  sheetChildPropertiesMapping,
  sheetStyle,
  sheetRules,
} from './properties';
import { Component, liquidRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadComponentClass('Sheet');
    component.loadVariants(sheetVariants());
    component.loadGroup('overlays');
    component.loadLabel('Sheet');
    component.getProperties(sheetProperties());
    component.getPropertiesMapping(sheetPropertiesMapping());
    component.getChildProperties(sheetChildProperties());
    component.getChildPropertiesMapping(sheetChildPropertiesMapping());
    component.getStyle(sheetStyle());
    component.getRules(sheetRules());
    component.loadStates([]);
    component.setRenderer(liquidRenderer);
  },
};

const SHEET = 'sheet';
export { SHEET };
