import {
  tableTextCellPropertiesMapping,
  tableTextCellProperties,
  tableTextCellVariants,
  tableTextCellChildProperties,
  tableTextCellChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadVariants(tableTextCellVariants());
    component.loadParent(TABLE)
    component.loadGroup('Columns')
    component.loadLabel('Text Column')
    component.getProperties(tableTextCellProperties());
    component.getPropertiesMapping(tableTextCellPropertiesMapping());
    component.getChildProperties(tableTextCellChildProperties());
    component.getChildPropertiesMapping(tableTextCellChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_TEXT_CELL }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_TEXT_CELL = 'tableTextCell'

export { TABLE_TEXT_CELL };