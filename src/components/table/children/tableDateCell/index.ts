import {
  tableDateCellPropertiesMapping,
  tableDateCellProperties,
  tableDateCellVariants,
  tableDateCellChildProperties,
  tableDateCellChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPDataTableCellDate')
    component.loadVariants(tableDateCellVariants());
    component.loadParent(TABLE)
    component.loadGroup('Columns')
    component.loadLabel('Date Column')
    component.getProperties(tableDateCellProperties());
    component.getPropertiesMapping(tableDateCellPropertiesMapping());
    component.getChildProperties(tableDateCellChildProperties());
    component.getChildPropertiesMapping(tableDateCellChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_DATE_CELL }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_DATE_CELL = 'tableDateCell'

export { TABLE_DATE_CELL };