import {
  tableHiddenCellPropertiesMapping,
  tableHiddenCellProperties,
  tableHiddenCellVariants,
  tableHiddenCellChildProperties,
  tableHiddenCellChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer, noRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadVariants(tableHiddenCellVariants());
    component.loadParent(TABLE)
    component.loadGroup('Columns')
    component.loadLabel('Hidden Column')
    component.getProperties(tableHiddenCellProperties());
    component.getPropertiesMapping(tableHiddenCellPropertiesMapping());
    component.getChildProperties(tableHiddenCellChildProperties());
    component.getChildPropertiesMapping(tableHiddenCellChildPropertiesMapping());

    component.loadStates([]);

    component.setRenderer(noRenderer);
  },
};

const TABLE_HIDDEN_CELL = 'tableHiddenCell'

export { TABLE_HIDDEN_CELL };