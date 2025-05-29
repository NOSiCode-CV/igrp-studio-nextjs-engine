import {
  columnPropertiesMapping,
  columnProperties,
  columnVariants,
  columnChildProperties,
  columnChildPropertiesMapping, columnStyle, columnRules,
} from './properties';
import { Component, defaultRenderer } from '../index';
import { COLUMNS } from '../columns';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadCustomClassName('');
    component.loadParent(COLUMNS)
    component.loadGroup('structure');
    component.loadLabel('Column');
    component.loadVariants(columnVariants())
    component.getProperties(columnProperties());
    component.getPropertiesMapping(columnPropertiesMapping());
    component.getChildProperties(columnChildProperties());
    component.getChildPropertiesMapping(columnChildPropertiesMapping());
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
    component.getStyle(columnStyle())
    component.getRules(columnRules())
  },
};

const COLUMN = 'column'

export { COLUMN };