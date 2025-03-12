import {
  tableBadgeCellPropertiesMapping,
  tableBadgeCellProperties,
  tableBadgeCellVariants,
  tableBadgeCellChildProperties,
  tableBadgeCellChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { BadgeIGRPDataTableCell } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(tableBadgeCellVariants());
    component.loadIcon('default')
    component.loadParent(TABLE)
    component.loadGroup('Columns')
    component.loadLabel('Badge Column')
    component.getProperties(tableBadgeCellProperties());
    component.getPropertiesMapping(tableBadgeCellPropertiesMapping());
    component.getChildProperties(tableBadgeCellChildProperties());
    component.getChildPropertiesMapping(tableBadgeCellChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_BADGE_CELL }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_BADGE_CELL = 'tableBadgeCell'

export { TABLE_BADGE_CELL };