import {
  columnsPropertiesMapping,
  columnsProperties,
  columnsVariants,
  columnsChildProperties,
  columnsChildPropertiesMapping, columnsRules, columnsStyle,
} from './properties';
import { Component, defaultRenderer } from '../index';
import { COLUMN } from '../column';

export default {
  register(component: Component) {
    component.loadImports([]);
    component.loadCustomClassName('grid');
    component.loadGroup('structure');
    component.loadLabel('Columns');
    component.loadVariants(columnsVariants())
    component.getProperties(columnsProperties());
    component.getPropertiesMapping(columnsPropertiesMapping());
    component.getChildProperties(columnsChildProperties());
    component.getChildPropertiesMapping(columnsChildPropertiesMapping());
    component.loadStates([]);
    component.loadChildrenTypes([{ name: COLUMN, isDefault: true }])
    component.loadAcceptedChildren([{ name: COLUMN, isDefault: true }])
    component.setRenderer(defaultRenderer);
    component.getRules(columnsRules())
    component.getStyle(columnsStyle())
  },
};

const COLUMNS = 'columns'

export { COLUMNS };