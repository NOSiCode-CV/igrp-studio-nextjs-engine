import {
  tableLinkCellPropertiesMapping,
  tableLinkCellProperties,
  tableLinkCellVariants,
  tableLinkCellChildProperties,
  tableLinkCellChildPropertiesMapping, tableLinkCellInteractions,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPDataTableCellLink')
    component.loadVariants(tableLinkCellVariants());
    component.loadParent(TABLE)
    component.loadGroup('Columns')
    component.loadLabel('Link Column')
    component.getProperties(tableLinkCellProperties());
    component.getPropertiesMapping(tableLinkCellPropertiesMapping());
    component.getChildProperties(tableLinkCellChildProperties());
    component.getChildPropertiesMapping(tableLinkCellChildPropertiesMapping());
    component.getInteractions(tableLinkCellInteractions());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_LINK_CELL }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_LINK_CELL = 'tableLinkCell'

export { TABLE_LINK_CELL };