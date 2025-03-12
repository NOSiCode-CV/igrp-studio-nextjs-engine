import {
  tableSelectFilterPropertiesMapping,
  tableSelectFilterProperties,
  tableSelectFilterVariants,
  tableSelectFilterChildProperties,
  tableSelectFilterChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { SelectIGRPDataTableFilter } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(tableSelectFilterVariants());
    component.loadIcon('default')
    component.loadParent(TABLE)
    component.loadLabel('Select Filter')
    component.loadGroup('Filters')
    component.getProperties(tableSelectFilterProperties());
    component.getPropertiesMapping(tableSelectFilterPropertiesMapping());
    component.getChildProperties(tableSelectFilterChildProperties());
    component.getChildPropertiesMapping(tableSelectFilterChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_SELECT_FILTER }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_SELECT_FILTER = 'tableSelectFilter'

export { TABLE_SELECT_FILTER };