import {
  tableDropdownFilterPropertiesMapping,
  tableDropdownFilterProperties,
  tableDropdownFilterVariants,
  tableDropdownFilterChildProperties,
  tableDropdownFilterChildPropertiesMapping,
} from './properties';
import { Component, hbsRenderer } from '../../../index';
import { replaceTemplate } from '../../../../utils/helpers';
import { TEMPLATES } from '../../../../utils/constants';
import { TABLE } from '../../index';

export default {
  register(component: Component) {
    component.loadImports([
      'import { DropdownIGRPDataTableFilter } from "@igrp/igrp-framework-react-design-system";',
    ]);

    component.loadVariants(tableDropdownFilterVariants());
    component.loadIcon('default')
    component.loadParent(TABLE)
    component.loadLabel('Dropdown Filter')
    component.loadGroup('Filters')
    component.getProperties(tableDropdownFilterProperties());
    component.getPropertiesMapping(tableDropdownFilterPropertiesMapping());
    component.getChildProperties(tableDropdownFilterChildProperties());
    component.getChildPropertiesMapping(tableDropdownFilterChildPropertiesMapping());
    component.loadTemplatePath(replaceTemplate(TEMPLATES.CHILD_ELEMENT, { parent: TABLE, name: TABLE_DROPDOWN_FILTER }))

    component.loadStates([]);

    component.setRenderer(hbsRenderer);
  },
};

const TABLE_DROPDOWN_FILTER = 'tableDropdownFilter'

export { TABLE_DROPDOWN_FILTER };