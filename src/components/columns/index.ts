import {
  columnsPropertiesMapping,
  columnsProperties,
  columnsVariants,
  columnsChildProperties,
  columnsChildPropertiesMapping,
} from './properties';
import { Component, defaultRenderer } from '../index';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadCustomClassName('');
    component.loadIcon('');
    component.loadGroup('structure');
    component.loadLabel('Columns');
    component.loadVariants(columnsVariants())
    component.getProperties(columnsProperties());
    component.getPropertiesMapping(columnsPropertiesMapping());
    component.getChildProperties(columnsChildProperties());
    component.getChildPropertiesMapping(columnsChildPropertiesMapping());
    component.loadStates([]);
    component.setRenderer(defaultRenderer);
  },
};

const COLUMNS = 'columns'

export { COLUMNS };