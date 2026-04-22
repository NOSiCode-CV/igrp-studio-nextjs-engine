import {
  tableTooltipCellPropertiesMapping,
  tableTooltipCellProperties,
  tableTooltipCellVariants,
  tableTooltipCellChildProperties,
  tableTooltipCellChildPropertiesMapping,
} from './properties';
import { Component, liquidRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
    ]);

    component.loadComponentClass('IGRPDataTableCellTooltip')
    component.loadVariants(tableTooltipCellVariants());
    component.loadParent(TABLE)
    component.loadGroup('Columns')
    component.loadLabel('Tooltip Column')
    component.getProperties(tableTooltipCellProperties());
    component.getPropertiesMapping(tableTooltipCellPropertiesMapping());
    component.getChildProperties(tableTooltipCellChildProperties());
    component.getChildPropertiesMapping(tableTooltipCellChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_TOOLTIP_CELL }))

    component.loadStates([]);

    component.setRenderer(liquidRenderer);
  },
};

const TABLE_TOOLTIP_CELL = 'tableTooltipCell'

export { TABLE_TOOLTIP_CELL };