import {
  columnPropertiesMapping,
  columnProperties,
  columnVariants,
  columnChildProperties,
  columnChildPropertiesMapping,
} from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadCustomClassName('');
    component.loadIcon('');
    component.loadGroup('structure');
    component.loadLabel('Column');
    component.loadVariants(columnVariants())
    component.getProperties(columnProperties());
    component.getPropertiesMapping(columnPropertiesMapping());
    component.getChildProperties(columnChildProperties());
    component.getChildPropertiesMapping(columnChildPropertiesMapping());
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
  },
};

const COLUMN = 'column'

export { COLUMN };